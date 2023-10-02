import React, { useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import { PiCaretDownBold } from "react-icons/pi";

const NutritionComponent = () => {
  const API_BASE_URL1 = "https://api.edamam.com/api/food-database/v2/parser";
  const API_BASE_URL2 = "https://api.edamam.com/api/nutrition-data";
  const API_ID1 = process.env.REACT_APP_EDAMAM_API_ID1;
  const API_KEY1 = process.env.REACT_APP_EDAMAM_API_KEY1;
  const API_ID2 = process.env.REACT_APP_EDAMAM_API_ID2;
  const API_KEY2 = process.env.REACT_APP_EDAMAM_API_KEY2;

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
      // Fetch data from the first API
      const response1 = await axios.get(
        `${API_BASE_URL1}?app_id=${API_ID1}&app_key=${API_KEY1}&ingr=${foodName}&nutrition-type=cooking`
      );

      // Fetch data from the second API
      const response2 = await axios.get(
        `${API_BASE_URL2}?app_id=${API_ID2}&app_key=${API_KEY2}&nutrition-type=cooking&ingr=${foodName}`
      );

      if (response1.status === 200 && response2.status === 200) {
        setNutritionInfo({
          edamamFood: response1.data,
          additionalFood: response2.data,
        });

        console.log(response1.data, response2.data);
      } else {
        console.error("Failed to fetch nutrition data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
        Nutritional Information
      </h2>
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row p-10 flex-col justify-start items-start">
        <div>
          <p className="font-light text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 lg:whitespace-nowrap">
            {/* Search for food nutrition */}
          </p>
        </div>
      </div>
      <div className="mx-auto p-4 md:p-6 rounded">
        <form onSubmit={getNutritionInfo} className="flex flex-col md:flex-row">
          <label
            htmlFor="foodName"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search a food or grocery to find the nutrition Info
          </label>
          <div className="flex flex-grow">
            <input
              className="flex-grow shadow-2xl bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="search"
              onChange={handleInputChange}
              required
              autoFocus
              value={foodName}
              id="foodName"
              placeholder="Search Food, Recipe ..."
            />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2 md:ml-4"
            >
              <HiSearch size={24} />
            </button>
          </div>
        </form>
      </div>

      {nutritionInfo && (
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
          {nutritionInfo.edamamFood && nutritionInfo.edamamFood.parsed && (
            <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
              <div className="md:w-5/12 lg:w-4/12 w-full">
                <h2 className="font-semibold text-center lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
                  {nutritionInfo.parsed[0].food.label}
                </h2>
                <br />
                <img
                  src={nutritionInfo.parsed[0].food.image}
                  alt={nutritionInfo.parsed[0].food.label}
                  className="w-full md:block hidden"
                />
                <img
                  src={nutritionInfo.parsed[0].food.image}
                  alt={nutritionInfo.parsed[0].food.label}
                  className="w-full md:hidden block"
                />
              </div>

              <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                <div>
                  <div className="flex justify-between items-center cursor-pointer">
                    <h3 className="font-medium sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Category
                    </h3>
                    <button
                      aria-label="toggle"
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

                <hr className="my-7 bg-gray-200" />

                <div>
                  <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-medium  sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                      Category Label
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
              </div>
            </div>
          )}

          {nutritionInfo.additionalFood && (
            <div>
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="font-medium sm:text-sm md:text-md lg:text-lg leading-5 text-gray-800">
                  Health Labels
                </h3>
                <button
                  aria-label="toggle"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
                {nutritionInfo.healthLabels}
              </p>
              <hr className="my-7 bg-gray-200" />
            </div>
          )}

          {!nutritionInfo.edamamFood && !nutritionInfo.additionalFood && (
            <p>No nutrition information found.</p>
          )}
        </div>
      )}
    </div>
  );
};
export default NutritionComponent;
