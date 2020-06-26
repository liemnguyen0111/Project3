const { model, Schema } = require('mongoose')

const Item = new Schema({
  title: String,
  description: String,
  category: {
    type: String,
    default: 'Miscellaneous'
  },
  keywords: [{
    type: String,
    default: ''
  }],
  photo: [{
    imagePaths: String
  }],
  isBought: {
    type: Boolean,
    default: false
  },
  live: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Item', Item)