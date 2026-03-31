import React from "react";
import errorImage from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 px-6">
      {/* Optional subtle background shape */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-100 to-pink-100 opacity-30 rounded-tl-[80px] rounded-br-[80px]"></div>

      {/* Illustration */}
      <img
        src={errorImage}
        alt="Page Not Found"
        className="w-80 sm:w-96 md:w-[500px] animate-fadeIn"
      />

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mt-8 text-gray-800 text-center animate-slideIn">
        Oops!
      </h1>

      <h2 className="text-3xl sm:text-4xl font-semibold mt-2 text-center text-gray-700">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-4 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="md:my-8 m-4 px-5 py-2 rounded-xl font-semibold text-white text-md bg-gradient-to-r from-indigo-600 to-pink-500 shadow-lg hover:from-pink-500 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
