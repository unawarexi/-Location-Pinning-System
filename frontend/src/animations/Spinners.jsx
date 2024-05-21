import React from "react";
import { RotatingLines, Rings, BallTriangle } from "react-loader-spinner";

export const ViewSpinner = () => {
  return (
    <section className="text-gray-600 body-font h-[700px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <BallTriangle
          visible={true}
          height="192"
          width="192"
          color="#6366F1"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="text-center  w-full mt-8">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 flex justify-center">
            please wait...
          </h1>
        </div>
      </div>
    </section>
  );
};

export const DetailSpinner = () => {
  return (
    <section className="text-gray-600 body-font h-[700px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Rings
          visible={true}
          height="192"
          width="192"
          color="#6366F1"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="text-center lg:w-2/3 w-full mt-8">
          <p className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 flex justify-center">
            customer details on the way...
          </p>
        </div>
      </div>
    </section>
  );
};

export const AuthSpinner = () => {
  return (
    <section className="text-gray-600 body-font h-[700px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <Rings
          visible={true}
          height="192"
          width="192"
          color="#6366F1"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <div className="text-center w-full mt-8">
          <p className="title-font sm:text-2xl text-xl md:text-2xl mb-4 font-medium text-gray-900 flex justify-center">
            Welcome Logging you in...
          </p>
        </div>
      </div>
    </section>
  );
};
