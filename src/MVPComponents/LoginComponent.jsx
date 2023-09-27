//This component will be for the login page
import { Link } from "react-router-dom";
import SmrtCartLogo2 from "../Assets/SmrtCartLogo2.png";

const LoginComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Left Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
        <img src={SmrtCartLogo2} alt="$mrtCART logo" className="w1 h-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4">Eat Fresh, Spend Smart!</h2>
      </div>
      
      {/* Right Half */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <h3 className="text-3xl font-semibold mb-6">Welcome to $mrtCART</h3>
        <Link to="/sign-up">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mb-4">
            Sign In
          </button>
        </Link>
        <p className="my-4">or</p>
        <Link to="/home">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-400">
            Continue As Guest
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
