// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const handleCustomersClick = () => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {isAuthenticated ? (
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Location System</span>
          </Link>
        ) : (
          <Link
            to="/auth"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Location System</span>
          </Link>
        )}

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {isAuthenticated ? (
            <Link
              to="/customers"
              className="mr-5 hover:text-gray-900"
              onClick={handleCustomersClick}
            >
              Customers
            </Link>
          ) : (
            <Link
              to="/auth"
              className="mr-5 hover:text-gray-900"
              onClick={handleCustomersClick}
            >
              Customers
            </Link>
          )}
        </nav>
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
            to="/auth"
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
