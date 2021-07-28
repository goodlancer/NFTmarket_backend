const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    avata: String,
    username: String,
    first: String,
    last: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
