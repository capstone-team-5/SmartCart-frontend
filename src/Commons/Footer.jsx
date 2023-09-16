import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import logo_image from "../Assets/SmrtCART.PNG";
import { Link } from "react-router-dom";
import MailingListComponent from "./MailingListComponent";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <MailingListComponent />
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src={logo_image}
                  alt="SmartCART Logo"
                  className="object-contain w-40 h-40 mr-3 lg:w-56 lg:h-56 rounded-full ml-4 md:ml-0"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Smart CART
                </span>
              </Link>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-1">
              <div className="mb-6">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  About Us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/about-us" className="hover:underline">
                      About Smart CART
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Meet Our Developers
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="https://github.com/capstone-team-5/SmartCart-frontend"
                      target="_blank"
                      className="hover:underline"
                    >
                      Contribute
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      News & Blog
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Advertise with Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/contact-us" className="hover:underline ">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/feedback" className="hover:underline">
                      Feedback
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/testimonials" className="hover:underline ">
                      Testimonials
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Mailing List
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Make a Donation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Account
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Sign In
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Create Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/change-password" className="hover:underline">
                      Change Password
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Account Settings
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/faq" className="hover:underline">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                Smart CART™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link
                to="#"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillFacebook size={18} color="gray" />
                <span className="sr-only">Facebook page</span>
              </Link>

              <Link
                to="#"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillInstagram size={18} color="gray" />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                to="https://www.youtube.com/@Keepit100Dre"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillYoutube size={18} color="gray" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                to="#"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTiktok size={14} color="gray" />
                <span className="sr-only">TikTok page</span>
              </Link>
              <Link
                to="https://github.com/orgs/capstone-team-5/dashboard"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillGithub size={18} color="gray" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                to="https://www.linkedin.com/in/vandhanamohan/"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillLinkedin size={18} color="gray" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
