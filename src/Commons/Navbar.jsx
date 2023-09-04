import React, { useState } from "react";
import { FaBars, FaHeart, FaUser } from "react-icons/fa";
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
    <nav className="bg-gray-700 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleDropdown} className="text-white mr-4">
          <FaBars />
        </button>
        <img src={logo_image} alt="Logo" className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex items-center">
        <button className="text-white mx-4">
          <FiSun />
          <FiMoon />
        </button>
        <button className="text-white mx-4">
          <FaHeart />
        </button>
        <button className="text-white mx-4">
          <HiOutlineShoppingCart />
        </button>
        <div className="relative">
          <button onClick={toggleUserDropdown} className="text-white">
            <FaUser />
          </button>
          {showUserDropdown && (
            <div className="absolute top-full right-0 mt-8 bg-white text-gray-800 shadow-lg p-4">
              <ul>
                <li>My Favorites</li>
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
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Products</li>
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

/*
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUser, FaStar, FaCog, FaSignOutAlt } from "react-icons/fa";
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

        <div className="flex items-center md:order-2 relative">
          <button
            type="button"
            className="flex items-center mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <FaUser className="w-8 h-8 rounded-full" />{" "}
//             /* Replace the user icon */
//             </button>

//             <div
//               className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute right-0 mt-2"
//               id="user-dropdown"
//             >
//               {/* User Dropdown content */}
//               <div className="px-4 py-3">
//                 <span className="block text-sm text-gray-900 dark:text-white">
//                   Aprill Green
//                 </span>
//                 <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                   Aprill@gmail.com
//                 </span>
//               </div>

//               <ul className="py-2" aria-labelledby="user-menu-button">
//                 <>
//                   <li>
//                     <Link
//                       to="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       <FaStar className="w-4 h-4 mr-2 inline-block" />
//                       My Favorites ♥️
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       <FaCog className="w-4 h-4 mr-2 inline-block" />
//                       Settings
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       // onClick={handleSignOut}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       <FaSignOutAlt className="w-4 h-4 mr-2 inline-block" />
//                       Sign Out
//                     </button>
//                   </li>
//                 </>
//               </ul>
//             </div>
//             <button
//               data-collapse-toggle="navbar-user"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus-ring-gray-600"
//               aria-controls="navbar-user"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <FaBars className="w-5 h-5" />
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-user"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               {menuItems.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to="/"
//                     className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     {item.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   };

//   export default Navbar;
