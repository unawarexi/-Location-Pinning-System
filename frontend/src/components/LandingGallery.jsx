import React from "react";
import {
  southAmerica,
  northAmerica,
  asia,
  australia,
  europe,
  africa,
  middleEast,
  japan,
  kenya,
} from "../assets/Images";

const imageArray = [
  {
    image: southAmerica,
    desc: "Experience the vibrant culture and stunning landscapes of South America.",
  },
  {
    image: northAmerica,
    desc: "Explore the diverse cities and natural wonders of North America.",
  },
  {
    image: africa,
    desc: "Discover the rich history and wildlife of Africa.",
  },
  {
    image: europe,
    desc: "Immerse yourself in the beauty and charm of Europe's cities and countryside.",
  },
  {
    image: asia,
    desc: "Journey through the ancient cultures and modern marvels of Asia.",
  },
  {
    image: middleEast,
    desc: "Experience the blend of tradition and modernity in the Middle East.",
  },
  {
    image: australia,
    desc: "Discover the unique wildlife and stunning landscapes of Australia.",
  },
  {
    image: kenya,
    desc: "Explore the natural beauty and wildlife of Kenya's national parks.",
  },
  {
    image: japan,
    desc: "theres always more to life and with japan there's always more to meet the eyes.",
  },
];

const LandingGallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Master On Every Continent We Got Your Back
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-sm md:text-lg lg:text-lg">
            Did you know we also offer Efficient location pinning across
            continents?, providing accurate service with swift responses.
            Connect seamlessly, manage customer details effortlessly, and
            enhance your global reach. Experience mind-blowing precision and
            speed in customer engagement.
          </p>
        </div>

        {/* {============================ mapping through array of images =========================} */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap -m-4">
              {imageArray.map((item, index) => (
                <div key={index} className="p-4 md:w-full">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 h-36 w-full object-cover object-center"
                      src={item.image}
                      alt="gallery"
                    />

                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-[13px] md:text-lg lg:text-lg font-medium text-gray-900 mb-3">
                        {item.desc}
                      </h1>
                      <p className="leading-relaxed mb-3 text-xs md:text-base lg:text-base">
                        Lost? I got your back! Wherever you wander, count on me
                        to help you find your way. Let's tackle this adventure
                        together!
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-xs md:text-base lg:text-base">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          6
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default LandingGallery;
