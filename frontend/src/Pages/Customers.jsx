import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCustomers, getCustomerById } from "../apis/CustomerCRUD";

import { ViewSpinner } from "../animations/Spinners";
import Error from "../error/Error";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getAllCustomers();
        console.log("API response:", response); // Debugging log
        if (response.data && Array.isArray(response.data)) {
          setCustomers(response.data);
        } else {
          setError("Unexpected response format");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setError("Error fetching customers");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleViewDetails = async (id) => {
    try {
      const response = await getCustomerById(id);
      console.log("Customer details:", response); // Debugging log
      navigate(`/customer/${id}`);
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <ViewSpinner />
      </div>
    );
  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex justify-between items-center py-6 border-b border-gray-200 mb-6 w-full">
            <div>
              <h1 className="text-4xl text-gray-800">Customers</h1>
            </div>

            <div className="bg-blue-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700">
              <Link to="/create">Create New Customer</Link>
            </div>
          </div>

          <hr />
          <div className="flex flex-wrap -m-4 w-full">
            {customers.map((customer) => (
              <div key={customer._id} className="p-4 lg:w-1/2 md:w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {customer.firstName} {customer.lastName}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {customer.email}
                    </p>
                    <Link
                      to="/details"
                      className="mt-3 text-blue-500 inline-flex items-center"
                      onClick={() => handleViewDetails(customer._id)}
                    >
                      View details
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
