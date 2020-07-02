module.exports = require("mongoose").connect(
  process.env.MONGODB_LOCAL || process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);