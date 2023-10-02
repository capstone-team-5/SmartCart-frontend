import React, { useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";

const NutritionComponent = () => {
  const API_BASE_URL = "https://api.edamam.com/api/food-database/v2/parser";
  const API_ID = process.env.REACT_APP_EDAMAM_API_ID;
  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

  const [foodName, setFoodName] = useState("");
  const [nutritionInfo, setNutritionInfo] = useState(null);

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
        console.log(response.data);
      } else {
        console.error("Failed to fetch nutrition data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-40 h-40 m-4">
        {nutritionInfo && (
          <img
            src={nutritionInfo.parsed[0].food.image}
            alt={nutritionInfo.parsed[0].food.label}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex-grow p-4">
        <h1>Nutrition Information</h1>
        <form onSubmit={getNutritionInfo}>
          <label
            htmlFor="foodName"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search a food or grocery item:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiSearch />
            </div>
            <input
              type="search"
              onChange={handleInputChange}
              required
              autoFocus
              value={foodName}
              id="foodName"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Nutrition Information
            </button>
          </div>
        </form>

        {nutritionInfo && (
          <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-open-body-1"
                aria-expanded="true"
                aria-controls="accordion-open-body-1"
              >
                <span class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  What is Flowbite?
                </span>
              </button>
            </h2>
            <div
              id="accordion-open-body-1"
              class="hidden"
              aria-labelledby="accordion-open-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                  <a
                    href="/docs/getting-started/introduction/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-open-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-open-body-2"
                aria-expanded="false"
                aria-controls="accordion-open-body-2"
              >
                <span class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is there a Figma file available?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-open-body-2"
              class="hidden"
              aria-labelledby="accordion-open-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-open-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-open-body-3"
                aria-expanded="false"
                aria-controls="accordion-open-body-3"
              >
                <span class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  What are the differences between Flowbite and Tailwind UI?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-open-body-3"
              class="hidden"
              aria-labelledby="accordion-open-heading-3"
            >
              <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionComponent;

/*
     
        <div>
          <h2>Nutrition Facts:</h2>
          <ul>
            <li>Category: {nutritionInfo.parsed[0].food.category}</li>
            <li>
              Category Label: {nutritionInfo.parsed[0].food.categoryLabel}
            </li>
            <li>
              Image:{" "}
              <img
                src={nutritionInfo.parsed[0].food.image}
                alt={nutritionInfo.parsed[0].food.label}
              />
            </li>
            <li>Known As: {nutritionInfo.parsed[0].food.knownAs}</li>
            <li>Label: {nutritionInfo.parsed[0].food.label}</li>
            <li>
              Calories: {nutritionInfo.parsed[0].food.nutrients.ENERC_KCAL}
            </li>
            <li>Protein: {nutritionInfo.parsed[0].food.nutrients.PROCNT}</li>
            <li>Fat: {nutritionInfo.parsed[0].food.nutrients.FAT}</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default NutritionComponent; */
