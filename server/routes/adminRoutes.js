const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  loginAdmin,
  logoutAdmin,
  getAdmin,
} = require("../controllers/adminController");

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", auth, getAdmin);

module.exports = router;
