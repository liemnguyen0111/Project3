const { model, Schema } = require('mongoose')

const Item = new Schema({
  title: String,
  description: String,
  price: Number,
  category: {
    type: String,
    default: 'Miscellaneous'
  },
  keywords: [{
    type: String,
    default: ''
  }],
  photos: [{
    type: String
  }],
  isBought: {
    type: Boolean,
    default: false
  },
  auctionOn: {
    type: Boolean,
    default: false,
    time: Date
  }
})

module.exports = model('Item', Item)