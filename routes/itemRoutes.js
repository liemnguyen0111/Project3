const router = require("express").Router();
const { Item, User, Bid, Comment } = require("../models");
const passport = require("passport");


// returns all items signed in or not
router.get("/items", (req, res) => {
  Item.find()
    .populate("user")
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
});

// signed in
// router.get("/items", passport.authenticate("jwt"), (req, res) => {
//   Item.find()
//     .populate("author")
//     .then((items) => res.json(items))
//     .catch((err) => console.error(err));
// });

// creating new item for sale
router.post("/items", passport.authenticate("jwt"), (req, res) => {
  const newItem = {
    title: req.body.title,
    description: req.body.body,
    user: req.user._id,
    price: req.body.price,
    category: req.body.category,
    photos: req.body.photo,
    keywords: req.body.keywords,
  };
  Item.create(newItem)
    .then((item) => {
      User.findByIdAndUpdate(req.user._id, { $push: { sellItems: item._id } })
        .then(() =>
          res.json(newItem)
        )
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});

router.post("/bids", passport.authenticate("jwt"), (req, res) => {
  const newBid = {
    body: req.body.body,
    photos: req.body.photo
    user: req.user._id,
    item: req.body.item,
  };
  Bid.create(newBid)
    .then((bid) => {
      User.findByIdAndUpdate(req.user._id, { $push: { sellItems: item._id } })
        .then(() => res.json(newItem))
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
});

router.post("/comments", passport.authenticate("jwt"), (req, res) => {
  const newItem = {
    title: req.body.title,
    description: req.body.body,
    user: req.user._id,
    price: req.body.price,
    category: req.body.category,
    photos: req.body.photo,
    keywords: req.body.keywords
  }
  Item.create(newItem)
    .then((item) => {
      User.findByIdAndUpdate(req.user._id, { $push: { sellItems: item._id } })
        .then(() => res.json(newItem))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
})

module.exports = router;


