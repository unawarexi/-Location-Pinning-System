import axios from "axios";

const submitForm = async (formData) => {
  const token = "your_jwt_token_here";

  try {
    const response = await axios.post(
      "http://localhost:5000/api/customers",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Customer created:", response.data);
  } catch (error) {
    console.error(
      "Error creating customer:",
      error.response?.data?.message || error.message
    );
  }
};

export default submitForm;
