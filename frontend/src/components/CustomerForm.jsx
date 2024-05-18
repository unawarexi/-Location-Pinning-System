import React, { useState } from "react";
import submitForm from "../apis/CustomerCRUD";

const CustomerForm = ({
  placeHolder,
  type,
  icon,
  inputState,
  inputStateFunc,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    inputStateFunc(value); // Update input state directly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData);
      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        },
      });
      inputStateFunc(""); // Clear input state
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 bg-black/5 backdrop-blur-md rounded-md w-full px-4 py-2">
      {icon}
      <form onSubmit={handleSubmit}>
        <input
          type={type}
          placeholder={placeHolder}
          value={inputState} // Use inputState instead of formData
          onChange={handleChange} // Use handleChange directly
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </form>
    </div>
  );
};

export default CustomerForm;
