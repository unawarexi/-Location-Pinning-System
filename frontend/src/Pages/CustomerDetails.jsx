import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCustomerById, deleteCustomer } from "../apis/CustomerCRUD";
import { DetailSpinner } from "../animations/Spinners";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  //  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(id);
        setCustomer(response.data); // Ensure we are setting the correct data
        //    setLoading(false);
      } catch (error) {
        console.error("Error fetching customer details:", error);
        //    setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmed) {
      try {
        await deleteCustomer(id);
        navigate("/customers");
      } catch (error) {
        console.error("Error deleting customer:", error);
      }
    }
  };

  if (!customer)
    return (
      <div>
        <DetailSpinner />
      </div>
    );

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              customer.address.street
            )} ${encodeURIComponent(customer.address.city)}&output=embed`}
            style={{ filter: "contrast(1.2)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                {customer.address.street}, {customer.address.city},{" "}
                {customer.address.state}, {customer.address.zip},{" "}
                {customer.address.country}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                {customer.email}
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="bg-black/5 px-4 py-4 rounded-lg">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Customer Details
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Detailed information about the customer.
            </p>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Name
              </h2>
              <p>
                {customer.firstName} {customer.lastName}
              </p>
            </div>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Email
              </h2>
              <p>{customer.email}</p>
            </div>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Address
              </h2>
              <p>
                {customer.address.street}, {customer.address.city},{" "}
                {customer.address.state}, {customer.address.zip},{" "}
                {customer.address.country}
              </p>
            </div>
          </div>

          <Link
            to="/customers"
            className="text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 text-center rounded text-lg"
          >
            Back
          </Link>
          <div className="flex w-full gap-10 items-center justify-between py-5">
            <Link
              to={`/update/${id}`}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              update {customer.firstName}
            </Link>
            <button
              onClick={handleDelete}
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              delete {customer.firstName}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;
