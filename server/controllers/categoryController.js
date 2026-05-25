const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getCategory = async (req, res) => {
  try {
    const data = await Category.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

exports.countCategory = async (req, res) => {
  try {
    const data = await Category.countDocuments();
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: message.err });
  }
};
