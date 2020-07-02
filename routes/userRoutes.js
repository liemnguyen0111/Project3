const router = require("express").Router();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/users", (req, res) => {
  const {
    firstName,
    lastName,
    address,
    age,
    email,
    username,
    password,
  } = req.body;
  User.create(firstName, lastName, address, age, email, username, password)
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

// Register Route
router.post("/users/register", (req, res) => {
  const {
    firstName,
    lastName,
    address,
    age,
    email,
    username,
    password,
  } = req.body;
  User.register(
    new User({ firstName, lastName, address, age, email, username }),
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
        // res.json(response);
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

module.exports = router;
