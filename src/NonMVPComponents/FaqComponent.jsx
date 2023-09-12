import React, { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
const FaqComponent = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div className=" ">
          <p className=" font-light text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">
            Here are few of the most frequently asked questions by our
            customers.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className=" md:w-5/12 lg:w-4/12 w-full ">
          <img
            src="https://www.house-dance.com/wp-content/uploads/2022/11/frequently-asked-questions.png"
            alt="Img of FAQ"
            className="w-full md:block hidden"
          />
          <img
            src="https://www.house-dance.com/wp-content/uploads/2022/11/frequently-asked-questions.png"
            alt="Img of FAQ"
            className="w-full md:hidden block "
          />
        </div>
        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                How does the price comparison work?
              </h3>
              <button
                aria-label="too"
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow(!show)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show ? "block" : "hidden")
              }
            >
              Our price comparison tool collects pricing information from
              various stores in your selected location based on your zip code.
              It then displays a list of products and their prices so you can
              easily find the lowest-priced items.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                How accurate is pricing information?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow2(!show2)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show2 ? "block" : "hidden")
              }
            >
              We strive to provide accurate and up-to-date pricing information
              by regularly updating our database. However, prices can change
              frequently, so we recommend double-checking the prices at the
              respective stores before making a purchase.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                Can I change my location or zip code for price comparison?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow3(!show3)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show3 ? "block" : "hidden")
              }
            >
              Yes, you can easily update your location or zip code to compare
              prices in different areas. Simply go to your account settings or
              the location settings on our platform and input the new zip code.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                What if I find a lower price at a local store not listed here?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow4(!show4)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show4 ? "block" : "hidden")
              }
            >
              We appreciate your feedback! If you discover a lower price at a
              store not included in our database, please let us know, and we'll
              consider adding it. Our goal is to provide you with the most
              comprehensive price comparison service possible.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                Do I need to sign in to add items to my cart and compare prices?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow4(!show4)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show4 ? "block" : "hidden")
              }
            >
              No, you do not need to sign in to add items to your cart and
              compare prices. You can browse and add items to your cart as a
              guest. However, signing in or creating an account allows you to
              view favorites, review store and personalized recommendations.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                What should I do if I forget my password and can't sign in?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow4(!show4)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show4 ? "block" : "hidden")
              }
            >
              If you forget your password, don't worry! On the sign-in page,
              click on the "Forgot Password" link, and we'll guide you through
              the process of resetting your password. You'll receive an email
              with instructions to create a new password and regain access to
              your account.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                How do I search for a specific product on the platform?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow4(!show4)}
              >
                <PiCaretDownBold />
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show4 ? "block" : "hidden")
              }
            >
              To search for a specific product, simply use the search bar
              located at the top of our website. Type in the name or keywords
              related to the product you're looking for, and our platform will
              display relevant results for you to choose from. You can also
              filter and find the product
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
