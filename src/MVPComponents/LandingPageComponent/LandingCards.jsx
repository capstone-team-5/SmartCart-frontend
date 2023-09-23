import React from "react";
import { Link } from "react-router-dom";
const LandingCards = () => {
  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl mb-8 tracking-tight font-extrabold text-gray-900 dark:text-white">
        Why Choose SmartCART?
      </h1>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {/* <!-- Remove className [ h-24 ] when adding a card block --> */}
        {/* <!-- Remove className [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
          <h2 className="text-xl font-semibold mb-2">More Flexibility</h2>
          <p>Sign up without any commitments</p>
        </div>
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
          <h2 className="text-xl font-semibold mb-2">More Satisfaction</h2>
          <p>Save both time and money!</p>
        </div>
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
          <h2 className="text-xl font-semibold mb-2">More Choices</h2>
          <p>Track your earnings and shop from nearby stores.</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
        <Link
          to="/home"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Shop now and save!
        </Link>
      </div>
    </section>
  );
};

export default LandingCards;
