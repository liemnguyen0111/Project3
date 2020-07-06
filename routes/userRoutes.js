const router = require("express").Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get("/users", passport.authenticate("jwt"), (req, res) => {

  // .populate({ 
  //   path: 'boughtItems',
  //   populate: {
  //     path: 'bid',
  //     model: 'Bid',
  //     populate : {
  //       path :'item',
  //       model : 'Item',
  //        populate: {
  //          path : 'topBid',
  //          model : 'Bid'
  //        }
  //     }
  //   } 
  // })

User.findById(req.user._id)
  .populate(["watchItems", "sellItems", "shipItems"])
  .populate({ 
    path: 'buyItems',
    populate: {
      path: 'bid',
      model: 'Bid'
    } 
 })
 .populate({ 
  path: 'boughtItems',
  populate: [{
    path: 'topBid',
    model: 'Bid',
  },
  {
    path: 'user',
    model: 'User',
  }
 ]
})
.populate({ 
  path: 'soldItems',
  populate: [{
    path: 'topBid',
    model: 'Bid',
  },
  {
    path: 'user',
    model: 'User',
  }
 ]
})
  .then(data => 
    {
      console.log(data)
      res.json(data)
    })
  .catch(err => console.log(err))
  
})

// Register Route
router.post("/users/register", (req, res) => {
  const {
    firstName,
    lastName,
    address,
    age,
    username,
    password,
  } = req.body;
  User.register(
    new User({ firstName, lastName, address, age, username}),
    req.body.password,
    (err, response) => {
      if (err) {
        console.error(err);
        res.json(err);
      } else {
        User.authenticate()(
          req.body.username,
          req.body.password,
          (err, user) => {
            if (err) {
              console.error(err);
            }
            res.json(
              user ? jwt.sign({ id: user._id }, process.env.SECRET) : null
            );
          }
        );
      }
    }
  );
});

// Login Route
router.post("/users/login", (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) {
      console.error(err);
    }
    res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null);
  });
});

router.get("/user/items", passport.authenticate("jwt"), (req, res) => {
  res.json(req.user);
});

router.get("/users/authorize", passport.authenticate("jwt"), (req, res) => {
  res.sendStatus(200);
});

module.exports = router 

