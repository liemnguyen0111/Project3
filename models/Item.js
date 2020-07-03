const { model, Schema } = require("mongoose");

const Item = new Schema({
  title: String,
  description: String,
  price: Number,
  category: {
    type: String,
    default: "Miscellaneous",
  },
  keywords: [
    {
      type: String,
      default: "",
    },
  ],
  photos: [
    {
      type: String,
    },
  ],
  isBought: {
    type: Boolean,
    default: false,
  },
  auctionOn: {
    type: Boolean,
    default: false,
  },
  dateTimeStart: {
    type: String
  },
  dateTimeStop: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  bid: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bid",
    },
  ],
  topBid: { 
    type: Schema.Types.ObjectId, 
    ref: "Bid" 
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
});

module.exports = model("Item", Item);
