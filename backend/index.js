const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { connectDB } = require("./config/dbconfig");

//Routes importing
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/CustomerRoutes");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

//Dotenv configuration
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//Working with routes
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  connectDB();
});
