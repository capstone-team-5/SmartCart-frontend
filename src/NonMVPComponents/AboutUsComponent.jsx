// This function will talk about our app

import React from "react";
import ChartComponent from "../MVPComponents/ChartComponent";
import ShoppingList from "../Assets/ShoppingList.png"
import SeeYourSavings from "../Assets/SeeYourSavings.png"
import FullPriceComparison from "../Assets/FullPriceComparison.jpeg"

const AboutUsComponent = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Who we are and what we do
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            {/* Mission / motto, services, our values, our promise */}
            <h3>
        Our mission is to empower individuals and families to save time and
        money on their grocery shopping. We address the common challenge faced
        by people seeking savings on grocery bills but lacking the time to
        compare prices across various supermarkets, including non-traditional
        stores like Indian, Russian, and Asian markets. Our application
        streamlines the shopping experience by allowing users to create a cart
        that calculates and compares total prices across multiple stores within
        their desired radius. Our app enables users to select grocery stores,
        compare total prices, and identifies the store offering the best overall
        value for their shopping needs.
        <br />
        <br />
        Our application caters to individuals seeking both time and cost
        efficiency. Users benefit from the convenience of obtaining the best
        prices for their entire shopping list in one place, ultimately saving
        them time and money.
        <br />
        <br />
      </h3>
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img src={ShoppingList} alt="user shopping list" />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Add to Cart
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                View Favorites
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              {/* <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              /> */}
              <img className="w-full h-full" src={FullPriceComparison} alt="price comparison" />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Compare Carts
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              {/* <img
                className="w-full h-full"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="A group of People"
              /> */}
              {/* <MockSavingsChart /> */}
              <img src={SeeYourSavings} alt="chart of your savings" />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                See Savings
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Features
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            {/* It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. */}
            Compare your entire cart across hundreds of stores. Find the lowest prices
            and see your savings!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Survey
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            92.87 percent of American shoppers believe the cost of groceries are too high. 
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          {/* <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          /> */}
          <ChartComponent />
        </div>
      </div>
      {/* <h3>
        Mission Statement:
        <br />
        <br />
        Our mission is to empower individuals and families to save time and
        money on their grocery shopping. We address the common challenge faced
        by people seeking savings on grocery bills but lacking the time to
        compare prices across various supermarkets, including non-traditional
        stores like Indian, Russian, and Asian markets. Our application
        streamlines the shopping experience by allowing users to create a cart
        that calculates and compares total prices across multiple stores within
        their desired radius. Our app enables users to select grocery stores,
        compare total prices, and identifies the store offering the best overall
        value for their shopping needs.
        <br />
        <br />
        Our application caters to individuals seeking both time and cost
        efficiency. Users benefit from the convenience of obtaining the best
        prices for their entire shopping list in one place, ultimately saving
        them time and money.
        <br />
        <br />
      </h3> */}
    </div>
  );
};

export default AboutUsComponent;