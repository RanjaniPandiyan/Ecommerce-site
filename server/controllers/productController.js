const Product = require("../models/Product");
exports.createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image required" });
    }
    const protocol = req.protocol;
    console.log(protocol);
    const host = req.get("host");
    const newProduct = new Product({
      ...req.body,
      price: Number(req.body.price),
      image: {
        url: `${protocol}://${host}/uploads/${req.file.filename}`,
        public_id: req.file.filename,
      },
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
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
    const data = await Product.aggregate([
      {
        $sort: { updatedAt: -1 },
      },
      {
        $limit: 4,
      },
    ]);
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
