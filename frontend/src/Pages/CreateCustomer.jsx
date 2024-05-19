import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomerForm } from "../components/ExportComponents";
import { MdPerson, MdMarkunreadMailbox } from "react-icons/md";
import { FaEnvelope, FaHome, FaCity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { createCustomer } from "../apis/CustomerCRUD";
import { customerImage } from "../assets/Images";

const CreateCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCustomer({
        // Call createCustomer API with customer data
        firstName,
        lastName,
        email: customerEmail,
        address: {
          street: streetAddress,
          city,
          state,
          zip,
          country,
        },
      });
      // Clear form after successful submission
      setFirstName("");
      setLastName("");
      setCustomerEmail("");
      setStreetAddress("");
      setCity("");
      setState("");
      setZip("");
      setCountry("");
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pt-24 mx-auto flex flex-wrap">
        <div className="flex justify-between items-center py-6 border-b border-gray-200 mb-6 w-full">
          <div>
            <h1 className="text-4xl text-gray-800">Customers</h1>
          </div>

          <div className="bg-blue-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-700">
            <Link to="/customers">customers list</Link>
          </div>
        </div>
      </div>

      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
          <img
            src={customerImage}
            alt="customer hero image"
            className="object-cover w-full"
          />
        </div>

        {/* {===================================  FORMS =================================} */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Register
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-12 py-4 ">
              <CustomerForm
                placeHolder={"First Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={firstName}
                inputStateFunc={setFirstName}
                type="text"
              />
              <CustomerForm
                placeHolder={"Last Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={lastName}
                inputStateFunc={setLastName}
                type="text"
              />
              <CustomerForm
                placeHolder={"Email Here"}
                icon={<FaEnvelope className="text-xl text-textColor" />}
                inputState={customerEmail}
                inputStateFunc={setCustomerEmail}
                type="email"
              />
              <CustomerForm
                placeHolder={"Street Address"}
                icon={<FaHome className="text-xl text-textColor" />}
                inputState={streetAddress}
                inputStateFunc={setStreetAddress}
                type="text"
              />
              <CustomerForm
                placeHolder={"City"}
                icon={<FaLocationDot className="text-xl text-textColor" />}
                inputState={city}
                inputStateFunc={setCity}
                type="text"
              />
              <CustomerForm
                placeHolder={"State"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={state}
                inputStateFunc={setState}
                type="text"
              />
              <CustomerForm
                placeHolder={"ZIP Code"}
                icon={
                  <MdMarkunreadMailbox className="text-xl text-textColor" />
                }
                inputState={zip}
                inputStateFunc={setZip}
                type="text"
              />
              <CustomerForm
                placeHolder={"Country"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={country}
                inputStateFunc={setCountry}
                type="text"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
            >
              Register
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreateCustomer;
