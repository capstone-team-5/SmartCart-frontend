import { Link } from "react-router-dom";
const LandingBanner = () => {
  return (
    <section className="bg-center  bg-transparent bg-[url(https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg)] bg-gray-700 bg-blend-multiply bg-contain">
      <div className="px-4 w-full mx-auto text-center py-24 lg:py-56 bg-black bg-opacity-50">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Find the lowest prices and best deals on groceries across hundreds of
          stores in your area with $mrtCART.
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
          Get Started to Save Today!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/login"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LandingBanner;
