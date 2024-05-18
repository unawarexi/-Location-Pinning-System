const customer = require("../models/CustomerModel");

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await customer.create(req.body);
    res.status(201).json({ success: true, data: newCustomer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customer.find();
    res.status(200).json({ success: true, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customerID = await customer.findById(req.params.id);
    if (!customerID) {
      return res
        .status(404)
        .json({ success: false, error: "Customer not found" });
    }
    res.status(200).json({ success: true, data: customerID });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedCustomer) {
      return res
        .status(404)
        .json({ success: false, error: "customer not found" });
    }
    res.status(200).json({ success: true, data: updatedCustomer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res
        .status(404)
        .json({ success: false, error: "customer not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
