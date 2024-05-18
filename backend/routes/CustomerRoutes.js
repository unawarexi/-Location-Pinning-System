const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/CustomerController");
const UserAuth = require("../middleware/UserAuth");

// Route for creating a new customer
router.post("/", UserAuth, createCustomer);

// Route for getting all customers
router.get("/", UserAuth, getAllCustomers);

// Route for getting a single customer by ID
router.get("/:id", UserAuth, getCustomerById);

// Route for updating a customer
router.put("/:id", UserAuth, updateCustomer);

// Route for deleting a customer
router.delete("/:id", UserAuth, deleteCustomer);

module.exports = router;
