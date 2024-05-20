const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/dbconfig");

const app = express();
app.use(express.json());

// Dotenv configuration
require("dotenv").config();

// Apply CORS middleware
app.use(
  cors({
    origin: ["https://system-location.vercel.app"],
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Root route
app.get("/", (req, res) => {
  res.send("server is running..");
});

// User controllers
const { registerUser, loginUser } = require("./controllers/UserController");
const UserAuth = require("./middleware/UserAuth");

// User routes (public)
app.post("/api/users/register", registerUser);
app.post("/api/users/login", loginUser);

// Apply UserAuth middleware for routes that require authentication
app.use(UserAuth);

// Customer controllers
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("./controllers/CustomerController");

// Customer routes (protected)
app.post("/api/customers", createCustomer);
app.get("/api/customers", getAllCustomers);
app.get("/api/customers/:id", getCustomerById);
app.put("/api/customers/:id", updateCustomer);
app.delete("/api/customers/:id", deleteCustomer);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
  connectDB();
});
