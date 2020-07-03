require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy : JWTStrategy, ExtractJwt } = require('passport-jwt')

//File upload
const fileUpload = require("express-fileupload");

const app = express()
const { User } = require('./models')

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
  .populate('posts')
  .then(user => cb(null, user))
  .catch(err => cb(err))))

  // Using routes that available on client/build folder that available in index.html file
app.get('*', (req,res) => 
{
    res.sendfile(join(__dirname, 'client' , 'build' , 'index.html'))
})

app.use(require('./routes'))

// Start a connection on port 3001
require('./config')
.then(() => app.listen(3001))
.catch(err => console.error(err))