import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";
import logo_image from "../Assets/SmrtCARTLogo4.png";
import { AiFillAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import {
  MdLogout,
  MdOutlineSavings,
  MdCategory,
  MdSettings,
  MdLocationPin,
} from "react-icons/md";

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
    link: "/user/:id/favorites",
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
    link: "/user/:id/feedback",
  },
];

const userDropDown = [
  {
    title: "Sign In",
    link: "/sign-up",
  },
  {
    title: "Create Account",
    link: "/sign-up",
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
    <header className="antialiased">
      <nav className="bg-green-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-white rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <HiMenuAlt2 size={30} />{" "}
              {/* hamburger menu in medium or large devices */}
            </button>
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <HiMenuAlt2 size={24} /> {/* hamburger menu in small devices */}
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link to="/home" className="flex mr-4">
              <img
                src={logo_image}
                alt="SmartCART Logo"
                className="mr-3 h-16"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                $mrt CART
              </span>
            </Link>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label for="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <HiSearch size={20} />
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <FiMoon
                className="text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer"
                onClick={() => handleThemeChange("light")}
              />
            </button>
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Search</span>
              {/* <!-- Search icon --> */}
              <HiSearch size={20} />
            </button>
            {/* <!-- Notifications --> */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Bell icon --> */}
              <FaHeart className="text-orange-500 peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
              id="notification-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Notifications
              </div>
            </div>
            {/* <!-- Apps --> */}
            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              {/* <!-- Icon --> */}
              <AiFillAppstore />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
              id="apps-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdOutlineSavings />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Savings
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <FiMoon />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Users
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdCategory />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Inbox
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <FaUserAlt />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Profile
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdSettings />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Settings
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <svg
                    className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Products
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <svg
                    className="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 11 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Pricing
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <HiOutlineShoppingCart />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Billing
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdLogout />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Logout
                  </div>
                </Link>
              </div>
            </div>
            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user icon"
              />
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Neil sims
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul
                className="py-1 text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    My profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Account settings
                  </Link>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <Link
                    to="#"
                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <FaHeart />
                    My favorites
                  </Link>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-500 dark:text-gray-400"
                aria-labelledby="dropdown"
              >
                <li>
                  <Link
                    to="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
/* <FaUser classNameName="w-8 h-8 rounded-full" />
    </button>
    User Dropdown content
    <div classNameName="px-4 py-3">
        <span classNameName="block text-sm text-gray-900 dark:text-white">
        Aprill Green
        </span>
        <span classNameName="block text-sm text-gray-500 truncate dark:text-gray-400">
        Aprill@gmail.com
        </span>

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

          {/* Search 
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

          {/* Icons 
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
      {/* Dropdown menu 
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

*/
