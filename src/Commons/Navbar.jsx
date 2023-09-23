import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { PiUserCircle } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import logo_image from "../Assets/SmrtCARTLogo3.png";

const navLinks = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "My Favorites ♥️",
    link: "/favorites",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    title: "Meet the Developers",
    link: "/meet-the-developers",
  },
  {
    title: "Feedback",
    link: "/feedback",
  },
  {
    title: "Review A Store",
    link: "/",
  },
];

const userDropDown = [
  {
    title: "Sign In",
    link: "/sign-up",
  },
  {
    title: "Create Account",
    link: "/signup",
  },
  {
    title: "Profile Settings",
    link: "/user/:id",
  },
  {
    title: "Sign Out",
    link: "/signout",
  },
];

const Navbar = ({ cartLength, handleThemeChange }) => {
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

  // Function to close the drop-down menu when a link is clicked

  const closeMenu = () => {
    setOpen(false);
    setShowUserDropdown(false);
  };

  return (
    <div className="bg-orange-200 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              aria-label={open ? "Close Main Menu" : "Open Main Menu"}
              aria-expanded={open}
            >
              {open ? (
                <FaTimes className="lg:text-3xl md:text-xl sm:text-md" />
              ) : (
                <GiHamburgerMenu className="lg:text-3xl md:text-xl sm:text-md" />
              )}
            </button>

            <Link to="/home" className="cursor-pointer">
              <img
                src={logo_image}
                alt="SmartCART Logo"
                className="object-contain w-20 h-20 lg:w-40 lg:h-40 rounded-full ml-4 md:ml-0"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="mt-3 md:w-1/2 sm:w-full">
            <div className="flex items-stretch">
              <input
                type="search"
                className="flex-auto rounded-l border border-solid border-gray-300  bg-clip-padding px-3 py-2 text-base font-normal text-gray-700 outline-none transition duration-200 ease-in-out focus:ring-2 focus:border-primary focus:text-gray-700 focus:shadow-outline dark:border-gray-600 dark:text-gray-200 dark:placeholder-text-gray-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />
              <button
                className="flex items-center bg-black px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg ml-[-1px]"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <HiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center md:space-x-8 lg:space-x-16">
            <div className="relative -mt-12 mr-16 bg-orange-200">
              <div className="p-2 rounded-md group absolute transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <div>
                  <FiMoon
                    className="text-black peer text-2xl lg:text-4xl md:text-2xl sm:text-lg cursor-pointer"
                    onClick={() => handleThemeChange("light")}
                  />
                  <p className="invisible text-black text-sm font-light peer-hover:visible absolute">
                    Dark Mode
                  </p>
                </div>

                <div>
                  <FiSun
                    className="text-black peer text-2xl lg:text-4xl md:text-2xl sm:text-lg cursor-pointer rounded-full dark:text-white"
                    onClick={() => handleThemeChange("dark")}
                  />
                  <p className="invisible text-black text-sm font-light peer-hover:visible absolute">
                    Light Mode
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <Link to="/favorites">
                <FaHeart className="text-orange-500 peer text-2xl lg:text-4xl md:text-2xl sm:text-lg cursor-pointer" />
                <p className="invisible text-black font-light text-sm peer-hover:visible absolute ">
                  My Favorites
                </p>
              </Link>
            </div>

            <Link
              to="/cart"
              className="p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <div className="p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                <HiOutlineShoppingCart className="text-black peer text-2xl lg:text-4xl md:text-2xl sm:text-lg cursor-pointer" />
                <p className="invisible text-black text-sm font-light peer-hover:visible absolute">
                  My Cart
                </p>

                {cartLength > 0 && (
                  <div className="absolute -top-1 right-0 transform translate-x-2 -translate-y-2">
                    <div className="rounded-full bg-orange-500 text-black w-5 h-5 text-xs font-bold flex items-center justify-center">
                      {cartLength}
                    </div>
                  </div>
                )}
              </div>
            </Link>

            <div className="p-2 rounded-md group relative transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <div
                className={`text-black text-lg  ${showUserDropdown}`}
                onClick={toggleUserDropdown}
              >
                <PiUserCircle className="text-black peer w-8 h-8 rounded-full cursor-pointer" />
                <p className="invisible text-black text-sm font-light peer-hover:visible absolute">
                  My Account
                </p>
              </div>
              {showUserDropdown && (
                <div className="absolute mt-2 right-0">
                  <ul className="py-1">
                    {userDropDown.map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          to={item.link}
                          className="text-black block px-3 py-2 rounded-md text-base font-medium whitespace-nowrap cursor-pointer"
                          onClick={closeMenu}
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
      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-16  bg-orange-200 left-0 w-72 z-50">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="text-black block px-3 py-2 rounded-md text-base whitespace-nowrap font-medium cursor-pointer"
                to={link.link}
                onClick={closeMenu}
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
