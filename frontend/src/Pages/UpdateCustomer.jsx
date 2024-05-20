import React, { useState, useEffect } from "react";
import { CustomerForm } from "../components/ExportComponents";
import { MdPerson, MdMarkunreadMailbox } from "react-icons/md";
import { FaEnvelope, FaHome, FaCity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../apis/CustomerCRUD";
import { updateImage } from "../assets/Images";

const UpdateCustomer = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [customerEmail, setCustomerEmail] = useState("");
  //   const [streetAddress, setStreetAddress] = useState("");
  //   const [city, setCity] = useState("");
  //   const [state, setState] = useState("");
  //   const [zip, setZip] = useState("");
  //     const [country, setCountry] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // --------------------------- PUPOLATES FORM STATE WITH EXISTING DATA
  const [customerData, setCustomerData] = useState({
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

  // ----------------------------- GET CUSTOMER BY ID
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(id);
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomer();
  }, [id]);

  // -------------------------------- UPDATES AND NAVIGATE BACK TO CUSTOMER DETAIL PAGE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(id, customerData);
      navigate(`/customer/${id}`);
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  // --------------------------- SETS CUSTOMER DATA WITH NEW ONE
  const handleChange = (field, value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // -------------------------- HANDLES THE INPUT OF ANYTHING ADDRESS
  const handleAddressChange = (field, value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: value,
      },
    }));
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pt-24 mx-auto flex flex-wrap">
        {/* {=========================== HEADER FOR PAGE =========================} */}

        <div className="flex justify-between items-center py-6 border-b border-gray-200 mb-6 w-full">
          <div>
            <h1 className="text-lg md:text-4xl lg:text-4xl font-semibold lg:font-normal text-gray-800">
              Customers
            </h1>
          </div>

          <div className=" items-center justify-center text-center">
            <div className="bg-transparent border border-indigo-500 px-2 py-1 lg:px-4 lg:py-2 rounded-full text-indigo-400 font-semibold hover:bg-slate-700 mb-2">
              <Link
                to="/customers"
                className="text-sm lg:text-base md:text-base"
              >
                cancel
              </Link>
            </div>

            <div className="bg-blue-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700">
              <Link
                to="/create"
                className="text-[10px] lg:text-base md:text-base"
              >
                Create New Customer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* {=========================== IMAGE FOR UPDATE SECTION =========================} */}
      <div className="container px-5 py-5 mx-auto flex flex-col lg:flex-row   md:justify-center md:items-center sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-full rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
          <img
            src={updateImage}
            alt="customer hero image"
            className="object-cover w-full"
          />
        </div>

        {/* {===================================  FORMS =================================} */}
        <div className="lg:w-1/3 md:full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Updating {customerData.firstName} {customerData.lastName}...
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-[13px] lg:text-base md:text-base">
            You must be here to update customer's info, thats what we made this
            for
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-12 py-4  ">
              <CustomerForm
                placeHolder={"First Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={customerData.firstName}
                inputStateFunc={(value) => handleChange("firstName", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"Last Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={customerData.lastName}
                inputStateFunc={(value) => handleChange("lastName", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"Email Here"}
                icon={<FaEnvelope className="text-xl text-textColor" />}
                inputState={customerData.email}
                inputStateFunc={(value) => handleChange("email", value)}
                type="email"
              />
              <CustomerForm
                placeHolder={"Street Address"}
                icon={<FaHome className="text-xl text-textColor" />}
                inputState={customerData.address.street}
                inputStateFunc={(value) => handleAddressChange("street", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"City"}
                icon={<FaLocationDot className="text-xl text-textColor" />}
                inputState={customerData.address.city}
                inputStateFunc={(value) => handleAddressChange("city", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"State"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={customerData.address.state}
                inputStateFunc={(value) => handleAddressChange("state", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"ZIP Code"}
                icon={
                  <MdMarkunreadMailbox className="text-xl text-textColor" />
                }
                inputState={customerData.address.zip}
                inputStateFunc={(value) => handleAddressChange("zip", value)}
                type="text"
              />
              <CustomerForm
                placeHolder={"Country"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={customerData.address.country}
                inputStateFunc={(value) =>
                  handleAddressChange("country", value)
                }
                type="text"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
            >
              update
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            Create, verify, save and explore clients from all over the world in
            one g.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpdateCustomer;
