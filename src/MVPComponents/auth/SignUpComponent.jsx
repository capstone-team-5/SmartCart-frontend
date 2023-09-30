//This is the sign-up page
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="relative flex flex-col justify-center rounded-lg shadow-yellow-500/50 shadow-lg overflow-hidden">
      <div className="w-full p-6 m-auto rounded-lg shadow-yellow-500/50 shadow-lg lg:max-w-xl">
        <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
          Create Account
        </h1>
        <form onSubmit={signUp} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="first_name"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">
                First Name
              </span>
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">Last Name</span>
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

          <div className="mb-2">
            <label
              htmlFor="confirm_password"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaLock className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">
                Confirm Password
              </span>
            </label>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="confirm_password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              required
              onChange={(event) => setConfirmPassword(event.target.value)}
              title="Confirm your password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gray-300 px-4 py-2 tracking-wide transition-colors duration-200 transform mt-6 px-8 py-4 font-bold text-center text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
