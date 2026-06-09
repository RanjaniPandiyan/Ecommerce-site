const Product = require("../models/Product");
const imagekit = require("../config/imagekit");
const fs = require("fs");

exports.createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image required" });
    }

    const result = await imagekit.upload({
      file: fs.readFileSync(req.file.path),
      fileName: req.file.filename,
      folder: "/products",
    });

    const newProduct = new Product({
      ...req.body,
      price: Number(req.body.price),
      image: {
        url: result.url,
        public_id: result.fileId,
      },
    });

    await newProduct.save();

    fs.unlinkSync(req.file.path);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }
};
exports.getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getProductsByTime = async (req, res) => {
  try {
    const data = await Product.find().sort({ updatedAt: -1 });

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getProductsById = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const upnewProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
    );
    res.json(upnewProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await imagekit.deleteFile(product.image.public_id);

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.countProduct = async (req, res) => {
  try {
    const data = await Product.countDocuments();
    res.json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
