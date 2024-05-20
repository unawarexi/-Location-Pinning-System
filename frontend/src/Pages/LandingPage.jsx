import React from "react";
import { Link } from "react-router-dom";
import { HeroImage } from "../assets/Images";
import { LandingGallery } from "../components/ExportComponents";

const LandingPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-col lg:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-xl md:text-3xl mb-4 font-medium text-gray-900">
              Lets get to them before
              <br className=" lg:inline-block" />
              someone else does!!!
            </h1>
            <p className="mb-8 leading-relaxed text-sm md:text-lg lg:text-lg">
              Reach out to your customers with personalized services and offers
              that they won't find anywhere else. your commitment to quality and
              customer satisfaction ensures that you'll always stay ahead of the
              competition.
            </p>
            <div className="flex justify-center ">
              <Link
                to="/create"
                className="inline-flex text-white bg-indigo-500 border-0 text-center py-2 px-3 md:px-6 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-[13px] md:text-lg lg:text-lg"
              >
                create customer
              </Link>
              <Link
                to="/customers"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 text-center py-2 px-3 md:px-6 lg:px-6 focus:outline-none hover:bg-gray-200 rounded  text-[13px] md:text-lg lg:text-lg"
              >
                view customers
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-20 lg:mt-0 mt-20 items-center justify-center">
            <img
              className="bounce object-cover object-center rounded"
              alt="hero"
              src={HeroImage}
            />
          </div>
        </div>
      </section>

      {/* {============================ BEGINNING OF "Allow us" section ================================} */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className=" text-indigo-500 tracking-widest font-medium title-font mb-1  text-[10px] md:text-xs lg:text-xs">
              we're on top of the world looking at your customers
            </h2>
            <h1 className="sm:text-3xl text-xl md:text-3xl font-medium title-font text-gray-900">
              Allow us to offer you these:
            </h1>
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap -m-4">
            <div className="p-4 md:w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0-4.97-4.03-9-9-9S3 5.03 3 10c0 7.49 9 13 9 13s9-5.51 9-13z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Pin and Navigate
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Easily pin customer locations and calculate distances.
                    Streamline your journey with precise navigation.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Accurate Location
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Accurate location tracking and efficient pinning system
                    ensures quick response times for customer management.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-full">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Swift response
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Swift response to customer needs with accurate location
                    pinning and real-time updates.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {============================ BEGINNING OF "Landing gallery" section ================================} */}
      <LandingGallery />
    </div>
  );
};

export default LandingPage;
