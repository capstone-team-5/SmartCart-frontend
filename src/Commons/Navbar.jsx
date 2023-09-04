import React, { useState } from "react";
import { FaBars, FaHeart, HiOutlineShoppingBag, FaUser } from "react-icons/fa";
import logo_image from "../Assets/SmrtCART.PNG";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleDropdown} className="text-white mr-4">
          <FaBars />
        </button>
        <img src={logo_image} alt="Logo" className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex items-center">
        <button className="text-white mx-4">
          <FaHeart />
        </button>
        <button className="text-white mx-4">
          <HiOutlineShoppingBag />
        </button>
        <button onClick={toggleUserDropdown} className="text-white">
          <FaUser />
        </button>
        {showUserDropdown && (
          <div className="absolute top-12 right-0 bg-white text-gray-800 shadow-lg p-2">
            <ul>
              <li>My Favorites</li>
              <li>Settings</li>
              <li>Sign Out</li>
            </ul>
          </div>
        )}
      </div>
      {showDropdown && (
        <div className="absolute top-12 right-0 bg-white text-gray-800 shadow-lg p-2">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Testimonial</li>
            <li>Feedback</li>
            {/* Add more menu items */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
