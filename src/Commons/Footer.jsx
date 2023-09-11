import React, { useState } from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import logo_image from "../Assets/SmrtCART.PNG";

const Footer = () => {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        <div className="flex flex-col flex-shrink-0">
          <div>
            <img
              src={logo_image}
              alt="SmartCART Logo"
              className="object-contain w-20 h-20 lg:w-40 lg:h-40 rounded-full ml-4 md:ml-0"
            />
          </div>

          <div className="flex items-center gap-x-4 mt-12">
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <AiFillInstagram size={18} color="white" />
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
              <AiFillFacebook size={18} color="white" />
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover-bg-gray-700 rounded-full flex items-center justify-center">
              <AiFillYoutube size={18} color="white" />
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover-bg-gray-700 rounded-full flex items-center justify-center">
              <AiFillGithub size={18} color="white" />
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover-bg-gray-700 rounded-full flex items-center justify-center">
              <AiFillLinkedin size={18} color="white" />
            </div>
            <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover-bg-gray-700 rounded-full flex items-center justify-center">
              <FaTiktok size={14} color="white" />
            </div>
          </div>
        </div>
        <div className="sm:ml-0 ml-8">
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            About Smart CART
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            About Us
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Meet Our Developers
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Leave a Feedback
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Contact us
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Testimonials
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            Support
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Sign In
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Create Account
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Forgot Password
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Account Settings
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            FAQ
          </p>
        </div>
      </div>
      <p className="text-sm text-center leading-none text-gray-800 mt-4">
        Copyright © 2023 Smart CART All rights reserved
      </p>
    </div>
  );
};

export default Footer;
