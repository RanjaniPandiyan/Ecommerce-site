const jwt = require("jsonwebtoken");

// STEP 1: Verify the user is logged in
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json("Not logged in");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json("Invalid token");
  }
};

// STEP 2: Verify the user has the correct role
const restrictTo = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json("Access denied: You do not have permission");
    }
    next();
  };
};

module.exports = { verifyToken, restrictTo };
