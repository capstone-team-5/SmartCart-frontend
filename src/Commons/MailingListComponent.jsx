// This component will allow users to receive mailing list information

import React, { useState } from "react";

const MailingListComponent = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignUp(event) {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
    } else {
      setSubscribed(true);
      setErrorMessage("");
    }
  }

  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 rounded shadow-md">
        {subscribed ? (
          <p className="text-center text-blue-600">
            Thank you! Watch your inbox for deals, new items and more.
          </p>
        ) : (
          <form className="flex flex-col gap-4 sm:flex-row items-center">
            <label className="text-black text-lg font-bold whitespace-nowrap">
              Subscribe to get updates!
            </label>
            <input
              type="email"
              placeholder="✉️ Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border rounded py-2 px-3 text-black placeholder-black focus:outline-none focus:ring focus:border-blue-300"
            />
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <button
              onClick={handleSignUp}
              className="py-2 px-4 bg-blue-500 text-white rounded whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MailingListComponent;
