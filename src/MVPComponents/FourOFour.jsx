//  This function is the error page, will take user back to the home page
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FourOFourComponent = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-white">
            Page Not Found !!!
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex text-black dark:text-white bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            aria-label="Go Back"
          >
            Back
          </button>

          <Link to='/home'>
          <button className="ml-10 inline-flex text-black dark:text-white bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            aria-label="Home">
            Return To Home Page
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FourOFourComponent;
