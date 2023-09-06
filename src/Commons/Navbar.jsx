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
    link: "/",
  },
  {
    title: "Create Account",
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
];

const Navbar = ({ cartLength }) => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
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
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label={open ? "Close Main Menu" : "Open Main Menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
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
          <div className="flex items-center space-x-4">
            <FiSun className="text-black text-lg" />
            <FiMoon className="text-black text-lg" />
            <Link to="/cart">
              <div className="relative">
                <HiOutlineShoppingCart className="text-black text-lg" />
                {cartLength > 0 && (
                  <div className="absolute -top-1 right-0 transform translate-x-2 -translate-y-2">
                    <div className="rounded-full bg-red-500 text-white w-5 h-5 text-xs font-bold flex items-center justify-center">
                      {cartLength}
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <FaUser className="text-black text-lg" />
          </div>

          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-black transition-all duration-500 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="text-black hover:bg-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
*/
