const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function createAdmin() {
  const existing = await Admin.findOne({ name: "admin" });
  const hash = await bcrypt.hash("admin123", 10);

  await Admin.create({
    name: "admin",
    password: hash,
  });

  console.log("Admin created");
}
createAdmin();
exports.loginAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;

    const admin = await Admin.findOne({ name });
    if (!admin) return res.status(400).json("Admin not found");

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json("Wrong password");

    const token = jwt.sign(
      { id: admin._id, name: admin.name, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.json({
      admin: {
        id: admin._id,
        name: admin.name,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.logoutAdmin = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    res.json({ user: admin });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
