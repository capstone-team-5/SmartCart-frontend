import { Link } from "react-router-dom";
const LandingBanner = () => {
  return (
    <section className="bg-center ml-2 mr-2 bg-transparent bg-[url(https://www.bankrate.com/2020/08/01170557/How-to-save-money-on-groceries.jpeg)] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Discover unbeatable prices at Smart CART, where savings meet
          convenience.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Start shopping now and enjoy amazing deals tailored just for you!.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/home"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Shop now and save!
          </Link>
          <Link
            to="/about-us"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LandingBanner;
