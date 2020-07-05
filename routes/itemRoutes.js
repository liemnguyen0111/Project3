const router = require("express").Router();
const { Item, User, Bid, Comment } = require("../models");
const jwt = require("jsonwebtoken");
const passport = require("passport");


// returns all items signed in or not
router.get("/items", (req, res) => {
  Item.find({isBought : false})
    .populate("user")
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
});


// returns all items signed in or not
router.get("/items/:id", (req, res) => {
  Item.find({_id : req.params.id})
    .populate("user")
    .then((items) => res.json(items))
    .catch((err) => console.error(err));
});


// creating new item for sale
router.post("/items", passport.authenticate("jwt"), async (req, res) => {

  let path = []
  const url = req.protocol + '://' + req.get('host')
  if (req.files) {
  const file = req.files.imgCollection
   for(let i = 0; i < file.length; i++ )
  {
     await file[i].mv(
      `./client/public/images/` + file[i].name,
        (err) => {
        if (err) {
          console.log('failed to upload')
        } else {
          isImage = true;
        }
      }
    ); 
     path.push(`/images/` + file[i].name)
  }
}

  req.body['photos'] = path
  req.body['user'] = req.user._id

  Item.create(req.body)
    .then((item) => {
      User.findByIdAndUpdate(req.user._id, { $push: { sellItems: item._id } })
        .then(() =>
          res.json(req.body)
        )
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
});

// update created auction item
// router.put('/items/:id', passport.authenticate("jwt"), (req, res) => {
//   Item.findByIdAndUpdate(req.params.id, { $set: req.body })
//     .then(data => res.json(data))
//     .catch(err => console.error(err))
// })

// // delete item by id
// router.delete('/items/:id', passport.authenticate("jwt"), (req, res) => {
//   Item.findByIdAndRemove(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => console.error(err))
// })


// create new bid on item
router.post("/bids", passport.authenticate("jwt"), (req, res) => {
  const newBid = {
    body: req.body.body,
    photos: req.body.photo,
    user: req.user._id,
    item: req.body.item
  };
  Bid.create(newBid)
    .then((bid) => {
      Item.findByIdAndUpdate(req.body.item, { $push: { bid: bid._id } })
        .then(() => res.json(newBid))
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

// create new comment on item
router.post("/comments", passport.authenticate("jwt"), (req, res) => {
  const newComment = {
    body: req.body.body,
    user: req.user._id,
    item: req.body.item
  }
  Comment.create(newComment)
    .then((comment) => {
      Item.findByIdAndUpdate(req.body.item, { $push: { comment: comment._id } })
        .then(() => res.json(newComment))
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

module.exports = router


