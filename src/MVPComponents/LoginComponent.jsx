import { Link } from "react-router-dom";
import logo_image from "../Assets/SmrtCARTLogo4.png";

const LoginComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900">
        <div className="text-center mb-10 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Eat Fresh Spend Smart
          </h1>
          <Link to="/home" className="flex items-center">
            <img
              className="w-24 h-24 lg:w-40 lg:h-40 rounded object-cover mr-3"
              src={logo_image}
              alt="SmrtCART Logo"
            />
            <h1 className="text-2xl lg:text-6xl font-semibold text-gray-900 dark:text-white">
              $mrtCART
            </h1>
          </Link>
          <p className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white mb-16">
            Comparison of Available Retailers and Their Prices
          </p>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-gray-700">
        <h3 className="text-xl lg:text-3xl font-semibold text-center mb-16 lg:mt-20">
          Welcome to $mrtCART
        </h3>
        <div className="flex flex-col lg:flex-row items-center mb-16 ">
          <Link to="/sign-in">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 btn-blue mr-0 lg:mr-8 mb-4 lg:mb-0">
              Sign In
            </button>
          </Link>
          <Link to="/home">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-400 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Continue As Guest
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-lg lg:text-xl font-semibold mr-2 lg:mr-4">
            No Account Yet?
          </h3>
          <Link to="/sign-up">
            <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
