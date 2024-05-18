import React, { useState } from "react";
import { CustomerForm } from "../components/ExportComponents";
import { MdPerson, MdMarkunreadMailbox } from "react-icons/md";
import { FaEnvelope, FaHome, FaCity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CreateCustomer = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Zip, setZip] = useState("");
  const [Country, setCountry] = useState("");

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
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* {===================================  FORMS =================================} */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Register
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>

          <div>
            <div className="flex flex-col w-full items-center justify-center gap-6 px-4 md:px-12 py-4 ">
              <CustomerForm
                placeHolder={"First Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={FirstName}
                inputStateFunc={setFirstName}
                type="text"
              />
              <CustomerForm
                placeHolder={"Last Name Here"}
                icon={<MdPerson className="text-xl text-textColor" />}
                inputState={LastName}
                inputStateFunc={setLastName}
                type="text"
              />
              <CustomerForm
                placeHolder={"Email Here"}
                icon={<FaEnvelope className="text-xl text-textColor" />}
                inputState={CustomerEmail}
                inputStateFunc={setCustomerEmail}
                type="email"
              />
              <CustomerForm
                placeHolder={"Street Address"}
                icon={<FaHome className="text-xl text-textColor" />}
                inputState={StreetAddress}
                inputStateFunc={setStreetAddress}
                type="text"
              />
              <CustomerForm
                placeHolder={"City"}
                icon={<FaLocationDot className="text-xl text-textColor" />}
                inputState={City}
                inputStateFunc={setCity}
                type="text"
              />
              <CustomerForm
                placeHolder={"State"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={State}
                inputStateFunc={setState}
                type="text"
              />
              <CustomerForm
                placeHolder={"ZIP Code"}
                icon={
                  <MdMarkunreadMailbox className="text-xl text-textColor" />
                }
                inputState={Zip}
                inputStateFunc={setZip}
                type="text"
              />
              <CustomerForm
                placeHolder={"Country"}
                icon={<FaCity className="text-xl text-textColor" />}
                inputState={Country}
                inputStateFunc={setCountry}
                type="text"
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Register
          </button>
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
