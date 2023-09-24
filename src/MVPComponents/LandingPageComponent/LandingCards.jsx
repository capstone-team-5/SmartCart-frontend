import React from "react";
import { Link } from "react-router-dom";
import ShoppingList from "../../Assets/ShoppingList.png"
import SeeYourSavings from "../../Assets/SeeYourSavings.png"

const LandingCards = () => {
  return (
    <section className="text-center mt-20">
      <h1 className="text-4xl mb-8 tracking-tight font-extrabold text-gray-900 dark:text-white">
        Why $mrtCART?
      </h1>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {/* <!-- Remove className [ h-24 ] when adding a card block --> */}
        {/* <!-- Remove className [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border --> */}
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
        <img src={ShoppingList} alt="your shopping list" />
          <h2 className="text-xl font-semibold mb-2">Add Items to Your Cart</h2>
          {/* <p>Sign up with no commitment.</p> */}
        </div>
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
          {/* this image will become the cart comparison page */}
        <img src={ShoppingList} alt="your shopping list" />
          <h2 className="text-xl font-semibold mb-2">Compare Prices Across Store</h2>
          {/* <p>Save time and money!</p> */}
        </div>
        <div className="rounded border-gray-300 dark:border-gray-700 border-2 h-24">
          <img src={SeeYourSavings} alt="See Your Savings Chart" />
          <h2 className="text-xl font-semibold mb-2">See Your Savings</h2>
          {/* <p>Watch your earnings and shop from the nearest stores.</p> */}
        </div>
      </div>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
        <Link
          to="/login"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Shop now and save!
        </Link>
      </div>
    </section>
  );
};

export default LandingCards;
