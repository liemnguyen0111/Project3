const { model, Schema } = require('mongoose')

const Item = new Schema({
  title: String,
  description: String,
  isBought: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Item', Item)