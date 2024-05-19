import React from "react";
import { error } from "../assets/Images";

const Error = () => {
  return (
    <section className="text-gray-600 body-font h-[700px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <img src={error} alt="" srcset="error image" />
        <div className="text-center lg:w-2/3 w-full mt-8">
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400 flex justify-center">
            We just couldn't get back to you...Apologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
