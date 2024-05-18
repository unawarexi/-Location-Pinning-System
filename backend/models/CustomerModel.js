const mongoose = require("mongoose");

// Define the Customer schema
const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
        match: [/^\d{5}$/, "Please fill a valid 5-digit zip code"],
      },
      country: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

// Create the Customer model
const customer = mongoose.model("Customer", customerSchema);

module.exports = customer;
