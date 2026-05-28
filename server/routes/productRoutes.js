const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProducts,
  getProductsById,
  deleteProduct,
  countProduct,
  getProductsByTime,
} = require("../controllers/productController");
const upload = require("../middleware/upload");
router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/count", countProduct);
router.get("/time", getProductsByTime);
router.get("/:id", getProductsById);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProduct);
module.exports = router;
