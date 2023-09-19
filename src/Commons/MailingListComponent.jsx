// This component will allow users to receive mailing list information

import React, { useState } from "react";
import { Link } from "react-router-dom";

const MailingListComponent = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignUp(event) {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
    } else {
      setSubscribed(true);
      setErrorMessage("");
      // Hide the "Thank you!" message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 2000);
      // Clear the email input after subscribing
      setEmail("");
    }
  }

  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  return (
    <div>
      {subscribed ? (
        <h3 className="text-center text-red-600">Thank you for Subscribing!</h3>
      ) : (
        <section className="bg-gray-50 dark:bg-gray-900 rounded">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                Stay up to date with the deals, announcements and exclusive
                discounts
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>

                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                    <input
                      className="block p-3 pl-10 w-full text-md bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 text-black placeholder-black"
                      placeholder="✉️ &nbsp; Enter your email"
                      type="email"
                      id="email"
                      value={email}
                      required
                      onChange={(event) => setEmail(event.target.value)}
                      aria-invalid="true"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={handleSignUp}
                      className="py-3 px-5 w-full text-md font-bold hover:underline text-center text-black rounded-lg border cursor-pointer bg-orange-300 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:text-orange-800 focus:ring-4 focus:ring-orange-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-gray-800 "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <Link
                    to="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </Link>
                  {errorMessage && (
                    <p className="text-red-500 underline text-center font-medium mt-2">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MailingListComponent;
