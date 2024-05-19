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

router.post("/", createCustomer);

router.get("/", getAllCustomers);

// Route for getting a single customer by ID
router.get("/:id", getCustomerById);

// Route for updating a customer
router.put("/:id", updateCustomer);

// Route for deleting a customer
router.delete("/:id", deleteCustomer);

router.use(UserAuth);

module.exports = router;
