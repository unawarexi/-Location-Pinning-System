// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleCustomersClick = () => {
    if (!isAuthenticated) {
      navigate("/");
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        {/* {============================ header icon and logo =========================} */}
        <Link
          to={`${isAuthenticated ? "/home" : "/"}`}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
            <circle cx="12" cy="9" r="2.5"></circle>
          </svg>

          <span className="ml-3 text-xl">Customer Location System</span>
        </Link>

        {/* {============================ header nav =========================} */}

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to={`${isAuthenticated ? "/customers" : "/"}`}
            className="font-semibold py-5 lg:py-0 hover:text-indigo-500 lg:font-normal lg:mr-10 md:mr-20  lg:hover:text-gray-900"
            onClick={handleCustomersClick}
          >
            Customers
          </Link>
        </nav>

        {/* {============================ get started / logout button =========================} */}
        {isAuthenticated ? (
          <button
            className="inline-flex items-center text-white bg-indigo-400 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded-full text-base mt-4 md:mt-0"
            onClick={handleLogout}
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        ) : (
          <Link
            to="/"
            className="inline-flex items-center text-white bg-indigo-400 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded-full text-base mt-4 md:mt-0"
          >
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
