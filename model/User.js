const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Requires full name"],
  },
  role: {
    type: String,
    enum: ["admin", "member"],
    default: "member",
  },
  class: {
    type: String,
    required: [true, "Invalid class"],
  },
  username: {
    type: String,
    required: [true, "Invalid username"],
  },
  password: {
    type: String,
    required: [true, "Invalid password"],
  },
  score: {
    type: Number,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    enum: ["design", "web"],
  },
  createdAt: {
    type: String,
    default: moment(Date.now()).format("HH:mm:ss"),
  },
});

const User = mongoose.model("User", userSchema, "User");
module.exports = User;
