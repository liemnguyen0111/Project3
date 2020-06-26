const { model, Schema } = require('mongoose')

const User = new Schema({
  fName: String,
  lName: String,
  age : Number,
  email: String,
  username: String
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)