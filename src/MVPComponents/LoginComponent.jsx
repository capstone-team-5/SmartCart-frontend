// This component will be for the login page
import { Link } from "react-router-dom";
import logo_image from "../Assets/SmrtCARTLogo4.png";

const LoginComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900">
        <h2 className="text-4xl font-bold mb-32 tracking-wider dark:text-white">
          Eat Fresh, Spend Smart!
        </h2>

        <div className="mb-6 md:mb-0 drop-shadow-lg">
          <Link
            to="/home"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="object-contain w-24 h-24 drop-shadow-lg mr-3 lg:w-40 lg:h-40 rounded ml-4 md:ml-0"
              src={logo_image}
              alt="SmrtCART Logo"
            />
            <h1 className="mb-2 sm: text-3xl md:text-6xl font-semibold text-gray-900 dark:text-white">
              $mrtCART
            </h1>
          </Link>
          <p className="mb-2 sm:text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Comparison of Available Retailers and Their Prices
          </p>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-gray-700">
        <h3 className="text-3xl font-semibold text-center mb-16">
          Welcome to $mrtCART
        </h3>
        <div className="flex flex-row">
          <Link to="/sign-in">
            <button className="inline-flex mr-8 justify-center items-center py-3 px-5 text-base text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:focus:ring-blue-900 font-semibold focus:outline-none focus:ring-blue-300 mb-4">
              Sign In
            </button>
          </Link>

          <Link to="/home">
            <button className="inline-flex mr-8 justify-center items-center py-3 px-5 text-base text-center text-black rounded-lg bg-gray-300 hover:bg-gray-400 focus:ring-4 dark:focus:ring-blue-900 font-semibold focus:outline-none focus:ring-blue-300 mb-4">
              Continue As Guest
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-16 mb-16">
          <h3 className="text-xl font-semibold mr-4">No Account Yet?</h3>
          <Link to="/sign-up">
            <button className="py-3 px-5 text-base text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:focus:ring-blue-900 font-semibold focus:outline-none focus:ring-blue-300 ml-4">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
