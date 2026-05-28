const router = require("express").Router();
const { verifyToken, restrictTo } = require("../middleware/auth");

const {
  loginAdmin,
  logoutAdmin,
  getAdmin,
} = require("../controllers/adminController");

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", verifyToken, restrictTo("admin"), getAdmin);

module.exports = router;
