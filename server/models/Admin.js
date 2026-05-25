const mongoose = require("mongoose");
const createSchema = new mongoose.Schema({
  name: String,
  password: String,
});
module.exports = mongoose.model("Admin", createSchema);
