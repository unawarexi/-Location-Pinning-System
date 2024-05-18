const express = require("express");
const router = express.Router();
// const auth = require("../middleware/CustomerAuth");
const customerController = require("../controllers/CustomerController");

router.post("/", customerController.createCustomer);

module.exports = router;
