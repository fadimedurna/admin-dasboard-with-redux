const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());

// Import Routes
app.use(cors({ origin: "*" }));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Backend server is running on port:", port);
});
