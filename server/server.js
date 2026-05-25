require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const app = express();

// connect DB
connectDB();

// middleware
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://ecommerce-nu-liard.vercel.app"],
    credentials: true,
  }),
);
app.use(express.json());

// routes

app.use("/api/category", categoryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads"));
// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
