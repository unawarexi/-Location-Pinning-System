import axios from "axios";

const API_URL = "http://localhost:5000/api/customers";

// Function to create a new customer
export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(API_URL, customerData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch all customers
export const getAllCustomers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to fetch a single customer by ID
export const getCustomerById = async (customerId) => {
  try {
    const response = await axios.get(`${API_URL}/${customerId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update a customer
export const updateCustomer = async (customerId, updatedCustomerData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${customerId}`,
      updatedCustomerData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to delete a customer
export const deleteCustomer = async (customerId) => {
  try {
    const response = await axios.delete(`${API_URL}/${customerId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
