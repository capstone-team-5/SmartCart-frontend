import React, { useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import { PiCaretDownBold } from "react-icons/pi";

const NutritionComponent = () => {
  const API_BASE_URL = "https://api.edamam.com/api/food-database/v2/parser";
  const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

  const [foodName, setFoodName] = useState("");
  const [nutritionInfo, setNutritionInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleInputChange = (event) => {
    setFoodName(event.target.value);
  };

  const getNutritionInfo = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `${API_BASE_URL}?app_id=${API_ID}&app_key=${API_KEY}&ingr=${foodName}&nutrition-type=cooking`
      );

      if (response.status === 200) {
        setNutritionInfo(response.data);
      } else {
        console.error("Failed to fetch nutrition data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex-grow p-4">     
        <form onSubmit={getNutritionInfo}>
          <label
            htmlFor="foodName"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search a food or grocery item:
          </label>
          <div className="">
            <input
              type="search"
              onChange={handleInputChange}
              required
              autoFocus
              value={foodName}
              id="foodName"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Food, Recipe ..."
            />
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div className="flex flex-row">
                <HiSearch size={24} />
                Get Nutrition Information
              </div>
            </button>
          </div>
        </form>

        
            <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
              <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
                Nutritional Infomation 
              </h2>
              <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                  <p className=" font-light text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 lg:whitespace-nowrap">
                    Here is the information
                  </p>
                </div>
              </div>
              {nutritionInfo && (
              <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full ">
                  <img
                    src={nutritionInfo.parsed[0].food.image}
                    alt={nutritionInfo.parsed[0].food.label}
                    className="w-full md:block hidden"
                  />
                  <img
                    src={nutritionInfo.parsed[0].food.image}
                    alt={nutritionInfo.parsed[0].food.label}
                    className="w-full md:hidden block "
                  />
                  <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                  Label: {nutritionInfo.parsed[0].food.label}
                      </h3> 
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                        Category
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
                      {nutritionInfo.parsed[0].food.category}
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />
                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Category Label
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
                      {nutritionInfo.parsed[0].food.categoryLabel}
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Known As:             
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
                      {nutritionInfo.parsed[0].food.knownAs}
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Calories
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
                      {nutritionInfo.parsed[0].food.nutrients.ENERC_KCAL}
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Protein
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
                      {nutritionInfo.parsed[0].food.nutrients.PROCNT}
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />
                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Fat
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
                      {nutritionInfo.parsed[0].food.nutrients.FAT}
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
                      To search for a specific product, simply use the search
                      bar located at the top of our website. Type in the name or
                      keywords related to the product you're looking for, and
                      our platform will display relevant results for you to
                      choose from. You can also filter and find the product
                    </p>
                  </div>

                  <hr className=" my-7 bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionComponent;