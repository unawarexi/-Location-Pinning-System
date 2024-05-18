const customer = require("../models/CustomerModel");

const customerController = {
  createCustomer: async (req, res) => {
    const { firstName, lastName, email, address } = req.body;

    if (!firstName || !lastName || !email || !address) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
      const newCustomer = new customer({
        firstName,
        lastName,
        email,
        address,
      });

      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  },
};

module.exports = customerController;
