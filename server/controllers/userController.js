const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  try {
    const { user, password } = req.body;
    const existingUser = await User.findOne({ user });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      user,
      password: hashedpassword,
    });
    const saveUser = await newUser.save();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { user, password } = req.body;
    const luser = await User.findOne({ user });
    if (!luser) return res.status(400).json("UserName Incorrect Try Again!");
    const lpassword = await bcrypt.compare(password, luser.password);
    if (!lpassword)
      return res.status(400).json("Password is Incorrect,Try Again!");
    const token = jwt.sign(
      { id: luser._id, luser: luser.user },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: luser._id,
        user: luser.user,
      },
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.getUser = async (req, res) => {
  try {
    const loginuser = await User.findById(req.user.id).select("-password");
    res.json({ user: loginuser });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
