import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const LandingTable = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md mb-8 lg:mb-20">
          <h2 className="mb-8 mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Discover the Benefits of $mrtCART
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            At $mrtCART, we're committed to enhancing your shopping experience.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-lg">
            <div className="flex flex-col p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-8 text-2xl font-semibold">
                Designed for Your Convenience
              </h3>

              <ul className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck color="green" />
                  <span>View thousands of items</span>
                </li>

                <li className="flex items-center space-x-3">
                  <AiOutlineCheck color="green" />
                  <span>View your favorite items</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck color="green" />
                  <span>Add items to your cart</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck color="green" />
                  <span>Compare your cart across all stores in your area</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck color="green" />
                  <span>Track your savings</span>
                </li>
              </ul>

              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
                <Link
                  to="/login"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Start Saving Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTable;
