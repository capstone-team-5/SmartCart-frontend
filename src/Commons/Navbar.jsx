import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { PiUserCircle } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo_image from "../Assets/SmrtCART.PNG";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "View Products",
    link: "/",
  },
  {
    title: "My Favorites ♥️",
    link: "/",
  },
  {
    title: "Categories",
    link: "/",
  },
  {
    title: "Contact-Us",
    link: "/contact-us",
  },
  {
    title: "Meet the Developers",
    link: "/meet-the-developers",
  },
  {
    title: "Feedback",
    link: "/",
  },
  {
    title: "Review A Store",
    link: "/",
  },
];

const userDropDown = [
  {
    title: "Sign In",
    link: "/signin",
  },
  {
    title: "Create Account",
    link: "/signup",
  },
  {
    title: "Profile Settings",
    link: "/profile",
  },
  {
    title: "Sign Out",
    link: "/signout",
  },
];

const Navbar = ({ cartLength }) => {
  const [open, setOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
    setOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Hamburger button and Logo */}
          <div className="flex items-center">
            {/* Hamburger Icon */}
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105"
              aria-label={open ? "Close Main Menu" : "Open Main Menu"}
              aria-expanded={open}
            >
              {open ? (
                <FaTimes className="lg:text-3xl md:text-xl sm:text-md" />
              ) : (
                <GiHamburgerMenu className="lg:text-3xl md:text-xl sm:text-md" />
              )}
            </button>

            <Link to="/">
              <img
                src={logo_image}
                alt="SmartCART Logo"
                className="w-20 h-20 lg:w-40 lg:h-40 rounded-full ml-4 md:ml-0"
              />
            </Link>
          </div>

          {/* Emojis */}
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-16">
            <span className="hover:bg-gray-100 p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105">
              <FiSun className="text-black text-lg lg:text-3xl md:text-xl sm:text-md group-hover:text-gray-100" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Light Mode
              </span>
            </span>

            <span className="hover:bg-gray-100 p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105">
              <FiMoon className="text-black text-lg lg:text-3xl md:text-xl sm:text-md group-hover:text-gray-100" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Dark Mode
              </span>
            </span>

            <span className="hover:bg-gray-100 p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105">
              <FaHeart className="text-orange-500 text-lg lg:text-3xl md:text-xl sm:text-md group-hover:text-gray-100" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                My Favorites
              </span>
            </span>

            <Link
              to="/cart"
              className="hover:bg-gray-100 p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative group">
                <HiOutlineShoppingCart className="text-black text-lg lg:text-3xl md:text-xl sm:text-md group-hover:text-gray-100" />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  My Cart
                </span>
                {cartLength > 0 && (
                  <div className="absolute -top-1 right-0 transform translate-x-2 -translate-y-2">
                    <div className="rounded-full bg-orange-500 text-black w-5 h-5 text-xs font-bold flex items-center justify-center">
                      {cartLength}
                    </div>
                  </div>
                )}
              </div>
            </Link>

            <div className="relative p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              <div
                className={`text-black text-2xl cursor-pointer lg:text-3xl md:text-xl sm:text-md ${showUserDropdown}`}
                onClick={toggleUserDropdown}
              >
                <PiUserCircle />
              </div>
              {/* <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-100 text-black py-1 px-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                My Account
              </span> */}
              {showUserDropdown && (
                <div className="absolute mt-2 right-0">
                  <ul className="py-1">
                    {userDropDown.map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={item.link}
                          className="text-black block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div>
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="text-black block px-3 py-2 rounded-md text-base whitespace-nowrap font-medium"
                to={link.link}
              >
                <span className="hover:bg-gray-100 px-4 py-4">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
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
