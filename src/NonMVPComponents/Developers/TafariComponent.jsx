//This component will talk about Tafari
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Tafari from "../../Assets/Tafari.png";

const TafariComponent = () => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center dark:bg-gray-700">
      <h1 className="mb-4 pb-4 p-4 text-center text-3xl font-bold dark:text-white">
        {" "}
        Tafari Excell
      </h1>
      <div className="flex flex-col items-center justify-center py-10">
        {/* Central Image */}
        <div className="relative">
          <img
            src={Tafari}
            alt="Profile"
            className="w-44 h-44 rounded-full transition transform hover:scale-110 animate-flyInUp"
          />
        </div>
      </div>
      {showAll && (
        <div className="flex flex-col items-center justify-center max-w-lg">
          <div className="bg-purple-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <p className="text-black text-center">
              <strong>Hobbies</strong>
              <br />
              Collecting Stamps
            </p>
          </div>
          <div className="bg-yellow-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <p className="text-black text-center">
              <strong>Passion</strong>
              <br />
              Stocks & Shares
            </p>
          </div>

          <div className="bg-pink-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <p className="text-black text-center">
              <strong>Education</strong>
              <br />
              College
            </p>
          </div>
          <div className="bg-green-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <p className="text-black text-center">
              <strong>Ask me about</strong>
              <br />
              Stocks
            </p>
          </div>
          <div className="bg-orange-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <Link
              to="https://github.com/Tafarigit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-center mb-3"
            >
              <strong>GitHub</strong>
            </Link>
            <BsGithub size={18} />
          </div>
          <div className="bg-blue-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <Link
              to="https://www.linkedin.com/in/tafari-e-7a5554110/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-center mb-3"
            >
              <strong>LinkedIn</strong>
            </Link>
            <BsLinkedin size={18} />
          </div>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          className="mt-4 p-2 text-indigo-600 hover:underline mb-4 lg:mb-8 text-xl font-extrabold tracking-wide leading-tight text-center dark:text-white md:text-2xl rounded-md"
          onClick={handleToggle}
        >
          {showAll ? "Show Less" : "Explore More"}
        </button>
      </div>
    </div>
  );
};

export default TafariComponent;
