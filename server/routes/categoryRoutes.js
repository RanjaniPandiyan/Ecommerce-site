const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategory,
  countCategory,
} = require("../controllers/categoryController");

// POST route
router.post("/", createCategory);
//get route
router.get("/", getCategory);
router.get("/count", countCategory);
module.exports = router;
