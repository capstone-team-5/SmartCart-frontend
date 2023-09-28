import React from "react";
import { Link } from "react-router-dom";
import ShoppingList from "../../Assets/ShoppingList.png";
import SeeYourSavings from "../../Assets/SeeYourSavings.png";
import FullPriceComparison from "../../Assets/FullPriceComparison.jpeg"

const LandingCards = () => {
  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl mb-8 tracking-tight font-extrabold text-gray-900 dark:text-white">
        Why $mrtCART?
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="rounded overflow-hidden bg-white p-4 shadow-lg">
          <img src={ShoppingList} alt="your shopping list" className="w-full" />
          <h2 className="text-xl font-semibold my-2">Add Items to Your Cart</h2>
        </div>
        <div className="rounded overflow-hidden bg-white p-4 shadow-lg">
          <img src={FullPriceComparison} alt="your shopping list" className="w-full" />
          <h2 className="text-xl font-semibold my-2">
            Compare Prices Across Stores
          </h2>
        </div>
        <div className="rounded overflow-hidden bg-white p-4 shadow-lg">
          <img
            src={SeeYourSavings}
            alt="See Your Savings Chart"
            className="w-full"
          />
          <h2 className="text-xl font-semibold my-2">See Your Savings</h2>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
        <Link
          to="/login"
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-5 rounded-lg"
        >
          Shop now and save!
        </Link>
      </div>
    </section>
  );
};

export default LandingCards;
