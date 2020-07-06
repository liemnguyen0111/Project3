const { model, Schema } = require("mongoose");

const Bid = new Schema({
  price : String,
  description : String,
  photos: [{
    type: String
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
})

module.exports = model("Bid", Bid)