const { model, Schema } = require("mongoose");

const Item = new Schema({
  title: String,
  description: String,
  price: String,
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
    default: true,
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
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
  }],
});

module.exports = model("Item", Item);
