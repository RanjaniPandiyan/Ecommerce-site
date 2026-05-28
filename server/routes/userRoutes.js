const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/user", verifyToken, getUser);
module.exports = router;
