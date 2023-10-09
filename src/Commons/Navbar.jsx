import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo_image from "../Assets/SmrtCARTLogo4.png";
import { FaHeart, FaUserAlt, FaNutritionix } from "react-icons/fa";
import { HiOutlineShoppingCart, HiSearch, HiMenuAlt2 } from "react-icons/hi";
import { AiFillAppstore, AiFillHome } from "react-icons/ai";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { GiMeal } from "react-icons/gi";
import {
  MdLogout,
  MdSavings,
  MdCategory,
  MdSettings,
  // MdLocationPin,
} from "react-icons/md";
import LocationHookComponent from "../MVPComponents/LocationHookComponent";

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
    title: "Explore All Categories",
    link: "/categories",
  },
  {
    title: "View Recipes",
    link: "/recipes",
  },
  {
    title: "Nutrition Info",
    link: "/nutrition",
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
  {
    title: "Track Savings",
    link: "/user/:id/savings/:selectedStore",
  },
  {
    title: "Our Testimonials",
    link: "/testimonials",
  },
  {
    title: "Sign in",
    link: "/sign-in",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const userDropDown = [
  {
    title: "Sign In",
    link: "/sign-in",
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
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showAppsDropdown, setShowAppsDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    handleThemeChange(newTheme);
  };

  // Function to close the drop-down menu when a link is clicked

  const toggleAppsDropdown = () => {
    setShowAppsDropdown((prev) => !prev);
    setOpen(false);
    setShowUserDropdown(false);
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
    setShowUserDropdown(false);
    setShowAppsDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
    setOpen(false);
    setShowAppsDropdown(false);
  };

  const closeMenu = () => {
    setOpen(false);
    setShowUserDropdown(false);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleTrackSavingsClick = () => {
    if (authUser) {
      // User is signed in, navigate to the "Track Savings" route
      navigate("/user/:id/savings");
    } else {
      // User is not signed in, navigate to the sign-in page
      navigate("/sign-in");
    }
  };

  const handleFavoritesClick = () => {
    if (authUser) {
      // User is signed in, navigate to the "My Favorites" route
      navigate("/user/:id/favorites");
    } else {
      // User is not signed in, navigate to the sign-in page
      navigate("/sign-in");
    }
  };

  const userSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_API}/products`)
        .then((response) => {
          const items = response.data;
          const productNamesSet = new Set();
          const foundItems = items
            .filter((item) => {
              const lowerCaseProductName = item.product_name.toLowerCase();
              if (!productNamesSet.has(lowerCaseProductName)) {
                productNamesSet.add(lowerCaseProductName);
                return (
                  lowerCaseProductName.includes(searchQuery.toLowerCase()) ||
                  item.product_category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.product_brand
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                );
              }
              return false;
            })
            .sort((a, b) => {
              const aExactMatch =
                a.product_name.toLowerCase() === searchQuery.toLowerCase();
              const bExactMatch =
                b.product_name.toLowerCase() === searchQuery.toLowerCase();

              if (aExactMatch && !bExactMatch) return -1;
              if (!aExactMatch && bExactMatch) return 1;

              const aStartsWithQuery = a.product_name
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase());
              const bStartsWithQuery = b.product_name
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase());

              if (aStartsWithQuery && !bStartsWithQuery) return -1;
              if (!aStartsWithQuery && bStartsWithQuery) return 1;

              return a.product_name.localeCompare(b.product_name);
            });

          setProducts(foundItems);
        })
        .catch((error) => console.log(error));
    } else {
      setProducts([]);
    }
    setClickedProduct(false);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setClickedProduct(false);
  };

  const handleProductClicked = (productName) => {
    setSearchQuery(productName);
    setSearchQuery("");
    setClickedProduct(true);
  };

  return (
    <header className="antialiased">
      <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              id="toggleSidebar"
              aria-expanded="true"
              aria-controls="sidebar"
              className="hidden p-2 mr-3 text-white rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleMenu}
            >
              <HiMenuAlt2 size={30} />{" "}
              {/* hamburger menu in medium or large devices */}
            </button>

            <button
              aria-label={open ? "Close Main Menu" : "Open Main Menu"}
              aria-expanded={open}
              aria-controls="sidebar"
              className="p-2 mr-2 text-white rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={handleMenu}
            >
              <HiMenuAlt2 size={24} /> {/* hamburger menu in small devices */}
              <span className="sr-only">Toggle sidebar</span>
            </button>

            <Link to="/home" className="flex mr-4">
              <img
                src={logo_image}
                alt="SmartCART Logo"
                className="mr-3 h-16 object-contain"
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                $mrtCART
              </span> */}
            </Link>
            <form className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <HiSearch size={18} />
                </div>
                <input
                  type="search"
                  name="search"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search for products, brands, categories..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="p-2 mr-1 rounded-lg hover:bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <BiSolidSun className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
              ) : (
                <BiSolidMoon className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
              )}
            </button>
            <button
              type="button"
              className="p-2 mr-1 rounded-lg hover:bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              {/* <MdLocationPin className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" /> */}
              <LocationHookComponent className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
            </button>
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-white rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Search</span>
              {/* <!-- Search icon --> */}
              <HiSearch size={20} />
            </button>
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <FaHeart className="text-orange-500 peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
            </button>

            <Link
              to="/cart"
              className="p-2 mr-1 rounded-lg hover:bg-white relative dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <HiOutlineShoppingCart className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
              {cartLength > 0 && (
                <div className="rounded-full bg-orange-500 text-black w-5 h-5 text-xs font-bold flex items-center justify-center absolute -top-1 right-0">
                  {cartLength}
                </div>
              )}
            </Link>

            {/* <!-- Apps --> */}
            <button
              type="button"
              data-dropdown-toggle="apps-dropdown"
              className="p-2 text-white rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleAppsDropdown}
            >
              <AiFillAppstore size={22} />
            </button>

            <div
              className={`${
                showAppsDropdown ? "block" : "hidden"
              } overflow-hidden absolute top-20 right-5 w-72 z-50 my-4 max-w-sm text-base list-none bg-gray-200 rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              id="apps-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-black bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                $mrtCART Apps
              </div>
              <div className="grid grid-cols-3 gap-4 p-4">
                <Link
                  to="/home"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <AiFillHome className="dark:text-white" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Home
                  </div>
                </Link>

                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdCategory className="dark:text-white" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Categories
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <HiOutlineShoppingCart className="dark:text-white" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Cart
                  </div>
                  {cartLength > 0 && (
                    <div className="absolute top-14 right-12">
                      <div className="rounded-full bg-orange-500 text-black w-5 h-5 text-xs font-bold flex items-center justify-center">
                        {cartLength}
                      </div>
                    </div>
                  )}
                </Link>
                <Link
                  to="/user/:id/favorites"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <FaHeart className="dark:text-white" />
                  <div
                    onClick={handleFavoritesClick}
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    My Favorites
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? (
                    <>
                      <BiSolidMoon className="dark:text-white" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Dark Mode
                      </div>
                    </>
                  ) : (
                    <>
                      <BiSolidSun className="dark:text-white" />
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Light Mode
                      </div>
                    </>
                  )}
                </Link>

                <Link
                  to="/user/:id/savings/:selectedStore"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdSavings className="dark:text-white" />
                  <div
                    onClick={handleTrackSavingsClick}
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Track Savings
                  </div>
                </Link>

                <Link
                  to="/recipes"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <GiMeal className="dark:text-white" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Recipes
                  </div>
                </Link>
                <Link
                  to="/nutrition"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <FaNutritionix className="dark:text-white" />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Nutrition
                  </div>
                </Link>
                <Link
                  to="#"
                  className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                >
                  <MdLogout className="dark:text-white" />
                  <div
                    onClick={userSignOut}
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
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
              onClick={toggleUserDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <FaUserAlt
                size={30}
                className="w-8 h-8 rounded-full object-contain text-white"
              />
              {/* <img
                className="w-8 h-8 rounded-full object-contain"
                src={sana}
                alt="user icon"
              /> */}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  DV
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  officialsmrtcart@gmail.com
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
                    onClick={handleFavoritesClick}
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

        {/* User Dropdown menu */}
        {showUserDropdown && (
          <div className="absolute mt-2 right-0 bg-gray-200 w-52 z-50">
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
        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-20 bg-gray-200 left-0 w-72 z-50">
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
        {products.length > 0 ? (
          <div className="absolute top-16 bg-white left-44 w-96 p-4 z-50">
            {products.map((product) => (
              <div key={product.product_id}>
                <Link
                  to={`/search-results/${product.product_name}`}
                  onClick={() => handleProductClicked(product.product_name)}
                >
                  <strong>
                    <h3>{product.product_name}</h3>
                  </strong>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {searchQuery && !clickedProduct
              ? "This product does not exist."
              : null}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

/*  View All Products
  <Link
    to="#"
    className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  >
    <svg
      className="mx-auto mb-2 w-5 h-5 text-black group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
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

*/
