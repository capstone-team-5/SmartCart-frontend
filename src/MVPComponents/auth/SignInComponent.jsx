// This is the sign-up page

import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../../firebase";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function google() {
    signInWithRedirect(auth, provider);
  }

  return (
    <div className="relative flex flex-col justify-center rounded-lg shadow-yellow-500/50 shadow-lg overflow-hidden">
      <div className="w-full p-6 m-auto rounded-lg shadow-yellow-500/50 shadow-lg lg:max-w-xl">
        <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
          Sign in
        </h1>
        <form onSubmit={signIn} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaEnvelope className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">Email</span>
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
              required
              title="Enter your email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaLock className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">Password</span>
            </label>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="password"
              placeholder="Enter your Password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
              title="Enter your password"
            />
            <p className="text-xs">
              {" "}
              Use 8 or more characters with a mix of letters, numbers & symbols{" "}
            </p>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gray-300 tracking-wide transition-colors duration-200 transform mt-6 px-8 py-4 text-center text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            onClick={google}
            className="w-full bg-gray-300 tracking-wide transition-colors duration-200 transform mt-6 px-8 py-4 text-center text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          >
            Sign In With Google &nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-lg font-light text-center text-white">
          Don't have an account?{" "}
          <Link to="/SignUp" className="font-medium text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInComponent;
