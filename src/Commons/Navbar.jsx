import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUser,
  FaHome,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Import the icons you need
import logo_image from "../Assets/SmrtCART.PNG";

const Navbar = () => {
  const menuItems = [
    { text: "Home" },
    { text: "Testimonials" },
    { text: "Subscribe" },
    { text: "About Us" },
    { text: "View Products" },
    { text: "Pricing" },
    { text: "Contact Us" },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center w-24 h-24">
          <img src={logo_image} className="mr-3" alt="SmartCART Logo" />
        </Link>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <FaUser className="w-8 h-8 rounded-full" />{" "}
            {/* Replace the user icon */}
          </button>
          {/* Dropdown menu */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Aprill Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                Aprill@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {item.icon} {/* Render the icon dynamically */}
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" /> {/* Replace with a bars icon */}
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
