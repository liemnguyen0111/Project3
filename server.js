require('dotenv').config()
const express = require('express')
const { join } = require('path')
const http = require('http');
const socketio = require('socket.io');
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy : JWTStrategy, ExtractJwt } = require('passport-jwt')

//File upload
const fileUpload = require("express-fileupload");

const app = express()
const { User } = require('./models')

const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const server = http.createServer(app);
const io = socketio(server);



// Using resouces in the client/build folder
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(fileUpload());

// User authenticate using passport
app.use(passport.initialize())
app.use(passport.session())


passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser((User.deserializeUser()))

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
  // .populate('item')
  .then(user => cb(null, user))
  .catch(err => cb(err))))



app.use(require("./routes"));
app.get("*", (req, res) => {
  res.sendfile(join(__dirname, "client", "build", "index.html"))
})


io.on('connection', socket => {
  socket.on('joinRoom', ({ room }) => {
    const user = userJoin(socket.id, room.slice(room.length - 10 , room.length ));
    socket.join(user.room);
    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for new update
  socket.on('update', msg => {
    const user = getCurrentUser(socket.id);
    console.log(user)
    io.to(user.room).emit('update', msg);
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    console.log('disconeect')
  });
});

const PORT = process.env.PORT || 5000
// Start a connection on port 3001
require('./config')
.then(() => server.listen(PORT))
.catch(err => console.error(err))