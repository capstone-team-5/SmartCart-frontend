import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHeart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import logo_image from "../Assets/SmrtCART.PNG";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleDropdown} className="text-black mr-4">
          <FaBars />
        </button>
        <Link to="/">
          <img
            src={logo_image}
            alt="SmartCART Logo"
            className="w-24 h-24 rounded-full"
          />{" "}
        </Link>
      </div>
      <div className="flex items-center">
        <button className="text-black mx-4">
          <FiSun />
          <FiMoon />
        </button>
        <button className="text-black mx-4">
          <FaHeart />
        </button>
        <button className="text-black mx-4">
          <HiOutlineShoppingCart />
        </button>
        <div className="relative">
          <button onClick={toggleUserDropdown} className="text-black">
            <FaUser />
          </button>
          {showUserDropdown && (
            <div className="absolute top-full right-0 mt-8 bg-white text-gray-800 shadow-lg p-4">
              <ul>
                <li style={{ whiteSpace: "nowrap" }}>My Favorites</li>
                <li>Settings</li>
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {showDropdown && (
        <div className="absolute mt-64 top-1/5 left-0 bg-white text-gray-800 shadow-lg p-2">
          <ul>
            <Link to="/about-us">
              <li>About Us</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
            <Link to="/">
              <li>Products</li>
            </Link>
            <Link to="/">
              <li>Testimonial</li>
            </Link>
            <Link to="/">
              <li>Feedback</li>
            </Link>
            {/* Add more menu items */}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
/* <FaUser className="w-8 h-8 rounded-full" />
    </button>
    User Dropdown content
    <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
        Aprill Green
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
        Aprill@gmail.com
        </span>
*/
