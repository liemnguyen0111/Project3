const { model, Schema } = require("mongoose");

const Bid = new Schema({
  body: String,
  photos: [{
    type: String
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model("Bid", Bid)