const { model, Schema } = require('mongoose')

const Comment = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
})

module.exports = model('Comment', Comment)