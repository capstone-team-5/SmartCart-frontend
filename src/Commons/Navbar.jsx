import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHeart, FaUser, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
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
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* hamburger button */}
          <div className="flex items-center md:hidden">
            {/* Hamburger Icon */}
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label={open ? "Close Main Menu" : "Open Main Menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo_image}
                  alt="SmartCART Logo"
                  className="w-20 h-20 lg:w-40 lg:h-40 rounded-full"
                />
              </Link>
            </div>
          </div>
          {/* Emojis */}
          <div className="flex items-center space-x-2 md:hidden">
            <FiSun className="text-black text-lg" />
            <FiMoon className="text-black text-lg" />
            <HiOutlineShoppingCart className="text-black text-lg" />
            <FaUser className="text-black text-lg" />
          </div>

          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-black transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* mobile - menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to={link.link}
              >
                {link.title}
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
  {
    title: "Profile Settings",
    link: "/",
  },
  {
    title: "Sign Out",
    link: "/",
  },
 
*/
