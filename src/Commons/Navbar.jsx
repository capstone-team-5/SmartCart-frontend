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
    title: "Contact-Us",
    link: "/contact-us",
  },
  {
    title: "Meet the Developers",
    link: "/meet-the-developers",
  },
  {
    title: "Products",
    link: "/",
  },
  {
    title: "Feedback",
    link: "/",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo_image}
                alt="SmartCART Logo"
                className="w-24 h-24 lg:w-48 lg:h-48 rounded-full"
              />
            </Link>
          </div>
          {/* Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu </span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile - menu */}
      {open ? (
        <div className="md:hidden">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href={link.link}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Navbar;

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showUserDropdown, setShowUserDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const userDropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//     setShowUserDropdown(false);
//   };

//   const toggleUserDropdown = () => {
//     setShowUserDropdown(!showUserDropdown);
//     setShowDropdown(false);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const closeDropdowns = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target) &&
//         userDropdownRef.current &&
//         !userDropdownRef.current.contains(e.target)
//       ) {
//         setShowDropdown(false);
//         setShowUserDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", closeDropdowns);

//     return () => {
//       document.removeEventListener("mousedown", closeDropdowns);
//     };
//   }, []);

//   return (
//     <nav className="bg-white p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <button
//           onClick={toggleDropdown}
//           className="text-black mr-4 text-2xl lg:text-3xl"
//         >
//           <FaBars />
//         </button>
//         <Link to="/">
//           <img
//             src={logo_image}
//             alt="SmartCART Logo"
//             className="w-24 h-24 lg:w-48 lg:h-48 rounded-full"
//           />
//         </Link>
//       </div>
//       <div className="flex items-center">
//         <button className="text-black mx-4 text-xl lg:text-2xl">
//           <FiSun />
//           <FiMoon />
//         </button>
//         <button className="text-black mx-4 text-xl lg:text-2xl">
//           <FaHeart />
//         </button>
//         <Link to="/cart" className="text-black mx-4 text-xl lg:text-2xl">
//           <HiOutlineShoppingCart />
//         </Link>
//         <div className="relative" ref={userDropdownRef}>
//           <button
//             onClick={toggleUserDropdown}
//             className="text-black text-xl lg:text-2xl"
//           >
//             <FaUser />
//           </button>
//           {showUserDropdown && (
//             <div className="absolute top-full right-0 mt-8 bg-white text-gray-800 shadow-lg p-4">
//               <ul>
//                 <li style={{ whiteSpace: "nowrap" }}>My Favorites ♥️</li>
//                 <li style={{ whiteSpace: "nowrap" }}>Profile Settings</li>
//                 <li>Sign Out</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//       {showDropdown && (
//         <div
//           className="absolute mt-64 top-1/5 left-0 bg-white text-gray-800 shadow-lg p-2"
//           ref={dropdownRef}
//         >
//           <ul>
//             <Link to="/about-us">
//               <li>About Us</li>
//             </Link>
//             <Link to="/meet-the-developers">
//               <li>Meet the Developers</li>
//             </Link>
//             <Link to="/contact-us">
//               <li>Contact Us</li>
//             </Link>
//             <Link to="/">
//               <li>Products</li>
//             </Link>
//             <Link to="/">
//               <li>Testimonial</li>
//             </Link>
//             <Link to="/">
//               <li>Feedback</li>
//             </Link>
//             <Link to="/">
//               <li>Connect With Us @ Social Media</li>
//             </Link>
//             {/* Add more menu items */}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Navbar;

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
