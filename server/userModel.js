const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Number, unique: true },
  email: { type: String, unique: true },
  imgURL: String,
  username: { type: String, unique: true },
  password: String,
  entries: Array,
  badEntries: Number
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
