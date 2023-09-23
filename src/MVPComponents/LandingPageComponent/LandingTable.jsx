import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const LandingTable = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Discover the Benefits of SmartCART
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            At SmartCART, we're committed to enhance your shopping experience.
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
                  <AiOutlineCheck
                    style={{
                      fontWeight: "bold",
                      color: "darkgreen",
                      fontSize: "30px",
                    }}
                  />
                  <span>No need to collect flyers</span>
                </li>

                <li className="flex items-center space-x-3">
                  <AiOutlineCheck
                    style={{
                      fontWeight: "bold",
                      color: "darkgreen",
                      fontSize: "30px",
                    }}
                  />

                  <span>Compare prices hassle-free</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck
                    style={{
                      fontWeight: "bold",
                      color: "darkgreen",
                      fontSize: "30px",
                    }}
                  />

                  <span>Save your favorite items</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck
                    style={{
                      fontWeight: "bold",
                      color: "darkgreen",
                      fontSize: "30px",
                    }}
                  />

                  <span>Track your earnings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <AiOutlineCheck
                    style={{
                      fontWeight: "bold",
                      color: "darkgreen",
                      fontSize: "30px",
                    }}
                  />

                  <span>No commitment required</span>
                </li>
              </ul>

              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
                <Link
                  to="/home"
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
