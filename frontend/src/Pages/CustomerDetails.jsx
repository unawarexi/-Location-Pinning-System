import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCustomerById, deleteCustomer } from "../apis/CustomerCRUD";
import { DetailSpinner } from "../animations/Spinners";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [distance, setDistance] = useState(null);
  const [isPinned, setIsPinned] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(id);
        setCustomer(response.data);

        // getting the latitude and longitude of the customer address
        const customerLatLng = await getLatLng(response.data.address);
        if (customerLatLng) {
          const customerLocation = {
            lat: customerLatLng.lat,
            lng: customerLatLng.lng,
          };

          // Fetch current location using ip address
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const currentLocation = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                setCurrentLocation(currentLocation);

                // Calculated result distance between current ip and desired location
                const calculatedDistance = calculateDistance(
                  currentLocation,
                  customerLocation
                );
                setDistance(calculatedDistance);
              },
              (error) =>
                console.error("Error fetching current location:", error),
              { enableHighAccuracy: true }
            );
          } else {
            console.error("Geolocation is not supported by this browser.");
          }
        }
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomer();
  }, [id]);

  //---------------------------------------- adding up customers location and user ip to get distance
  const getLatLng = async (address) => {
    const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress
        )}&key=${API_KEY}`
      );
      if (response.data.results.length > 0) {
        return response.data.results[0].geometry.location;
      }
      return null;
    } catch (error) {
      console.error("Error fetching geolocation:", error);
      return null;
    }
  };

  /**
   *  using lattitude and longitude to determine position
   *  here is where the main calculation kicks off
   * fun fact: i myself is a little confused here
   *
   * @param {*------ this is loaction 1} loc1
   * @param {* --------- this is location 2} loc2
   * @returns
   */
  const calculateDistance = (loc1, loc2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // in kilometers
    const dLat = toRad(loc2.lat - loc1.lat);
    const dLon = toRad(loc2.lng - loc1.lng);
    const lat1 = toRad(loc1.lat);
    const lat2 = toRad(loc2.lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d.toFixed(2);
  };

  // -------------------------- pin location
  const togglePin = () => {
    setIsPinned(!isPinned);
  };

  //------------------------  handles the delete functionality

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
      <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-full h-[500px] lg:h-[700px] bg-gray-300 shadow-lg shadow-gray-500  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
          <div className="bg-white relative flex md:flex-col lg:flex-row flex-wrap py-4 md:py-6 lg:py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-[10px] md:text-xs lg:text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-[10px] lg:text-base md:text-base">
                {customer.address.street}, {customer.address.city},{" "}
                {customer.address.state}, {customer.address.zip},{" "}
                {customer.address.country}
              </p>
              {distance && (
                <p className="mt-2 text-indigo-500 text-[10px] md:text-base lg:text-base">
                  Distance: {distance} km
                </p>
              )}
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-[10px] md:text-base lg:text-base">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed text-[10px] md:text-base lg:text-base">
                {customer.email}
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <div className="bg-black/5 px-4 py-4 rounded-lg">
            <h2 className="text-gray-900 mb-1 font-medium title-font text-sm md:text-lg lg:text-lg">
              Customer Details
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 text-[13px] md:text-base lg:text-base">
              Detailed information about the customer.
            </p>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Name
              </h2>
              <p className="text-[13px] md:text-base lg:text-base">
                {customer.firstName} {customer.lastName}
              </p>
            </div>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Email
              </h2>
              <p className="text-[13px] md:text-base lg:text-base">
                {customer.email}
              </p>
            </div>
            <div className="relative mb-4">
              <h2 className="leading-7 text-sm text-gray-600 font-semibold">
                Address
              </h2>
              <p className="text-[13px] md:text-base lg:text-base">
                {customer.address.street}, {customer.address.city},{" "}
                {customer.address.state}, {customer.address.zip},{" "}
                {customer.address.country}
              </p>
            </div>
          </div>

          <Link
            to="/customers"
            className="text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 text-center rounded text-[13px] md:text-lg lg:text-lg"
          >
            Back
          </Link>
          <div className="flex w-full gap-10 items-center justify-between py-5">
            <Link
              to={`/update/${id}`}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-[13px] md:text-lg lg:text-lg"
            >
              update {customer.firstName}
            </Link>
            <button
              onClick={handleDelete}
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-[13px] md:text-lg lg:text-lg"
            >
              delete {customer.firstName}
            </button>
          </div>
          <button
            onClick={togglePin}
            className={`mt-4 py-1 md:py-2 lg:py-2 px-6 rounded text-lg ${
              isPinned
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-transparent hover:bg-white border border-indigo-500 "
            } text-indigo-500 rounded-full text-[13px] md:text-lg lg:text-lg`}
          >
            {isPinned ? "Unpin Location" : "Pin Location"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetails;
