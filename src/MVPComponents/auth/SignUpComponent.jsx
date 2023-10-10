// This is the sign-up page

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_image from "../../Assets/SmrtCARTLogo4.png";
import axios from "axios";
import { auth, googleProvider } from "../../Firebase";
import { FaGoogle } from "react-icons/fa6";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }

    // Create the user in Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        // Send user data to backend
        const userData = {
          shopper_firebase_uid: user.uid,
          shopper_email: email,
          shopper_first_name: firstName,
          shopper_last_name: lastName,
        };

        // Make a POST request to backend
        axios
          .post(`${process.env.REACT_APP_BACKEND_API}/shoppers`, userData)
          .then((response) => {
            // Navigate to the home page
            navigate("/home");
          })
          .catch((error) => {
            console.error(
              "Error sending user data to the backend:",
              error.response
            );
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function google() {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const { user } = userCredential;
        const fullName = user.displayName;
        const splitName = fullName.split(" ");
        const first_name = splitName[0];
        const last_name = splitName[splitName.length - 1];
        // Send user data to backend
        const userData = {
          shopper_firebase_uid: user.uid,
          shopper_email: user.email,
          shopper_first_name: first_name,
          shopper_last_name: last_name,
        };

        console.log("userData", userData);
        // Make a POST request to backend
        axios
          .post(`${process.env.REACT_APP_BACKEND_API}/shoppers`, userData)
          .then((response) => {
            // Navigate to the home page
            navigate("/home");
          })
          .catch((error) => {
            console.error(
              "Error sending user data to the backend:",
              error.response
            );
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-full mr-3 h-16 object-contain"
            src={logo_image}
            alt="SmrtCART Logo"
          />
          $mrtCART
        </Link> */}
        <div className="w-full bg-white rounded-lg drop-shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome
            </h1>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="newsletter"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    to="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="flex flex-row">
              <button
                type="button"
                onClick={google}
                className="flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 whitespace-nowrap mr-2"
              >
                Sign In With Google <FaGoogle size={18} className="ml-2" />
              </button>
            </div>

            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                or
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <form onSubmit={signUp} className="space-y-4 md:space-y-6">
              <div className="mb-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>

                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="first_name"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  autoFocus
                  required
                  title="Enter your First Name"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="last_name"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  title="Enter your Last Name"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  title="Enter your email"
                />
              </div>
              <div className="mb-2 relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                  id="password"
                  placeholder="*******************"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  title="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <AiOutlineEyeInvisible
                    className="text-gray-400 dark:text-gray-200"
                    size={20}
                  />
                </div>
                <p className="text-xs mt-2 dark:text-white">
                  {" "}
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols{" "}
                </p>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="confirm_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="confirm_password"
                  placeholder="Confirm your Password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                  value={confirmPassword}
                  required
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  title="Confirm your password"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;
