const mongoose = require("mongoose");
const createSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  password: String,
});
module.exports = mongoose.model("Admin", createSchema);
