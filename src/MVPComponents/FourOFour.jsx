//  This function is the error page, will take user back to the home page
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const FourOFourComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        The page you're looking for may have been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300 text-sm md:text-base lg:text-lg"
        aria-label="Go to Home Page"
      >
        Go to Home Page
      </Link>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 text-gray-600 hover:text-gray-800 text-sm md:text-base lg:text-lg"
        aria-label="Go Back"
      >
        Go Back
      </button>
    </div>
  );
};

export default FourOFourComponent;
