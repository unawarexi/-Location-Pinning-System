const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/dbconfig");

// Routes importing
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/CustomerRoutes");

const app = express();
app.use(express.json());

// Dotenv configuration
require("dotenv").config();

// CORS configuration to allow requests from all origins and methods
app.use(cors({ origin: "*" }));

// Default route to check if server is running
app.get("/", (req, res) => {
  res.send("Server is running..");
});

// Working with routes
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  connectDB();
});
