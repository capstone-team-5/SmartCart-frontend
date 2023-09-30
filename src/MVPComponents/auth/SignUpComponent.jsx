// This is the sign-up page
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import logo_image from "../../Assets/SmrtCARTLogo4.png";

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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-full mr-3 h-16 object-contain"
            src={logo_image}
            alt="SmrtCART Logo"
          />
          $mrtCART
        </Link>
        <div className="w-full bg-white rounded-lg drop-shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome
            </h1>
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
                  onChange={(eßvent) => setLastName(event.target.value)}
                  required
                  title="Enter your Last Name"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="flex items-center text-sm font-semibold text-gray-800"
                >
                  <span className="text-xl tracking-wide font-bold">Email</span>
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
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
                  <span className="text-xl tracking-wide font-bold">
                    Password
                  </span>
                </label>

                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  title="Enter your password"
                />
                <p className="text-xs">
                  {" "}
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols{" "}
                </p>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="confirm_password"
                  className="flex items-center text-sm font-semibold text-gray-800"
                >
                  <span className="text-xl tracking-wide font-bold">
                    Confirm Password
                  </span>
                </label>

                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"
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
                  className="w-full bg-gray-300 tracking-wide transition-colors duration-200 transform mt-6 px-8 py-4 font-bold text-center text-black text-2xl sm:text-lg md:text-xl hover:text-white rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;
