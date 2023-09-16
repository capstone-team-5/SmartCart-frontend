// This function will list all categories
import React, { useState, useEffect } from "react";
import FilterResultsComponent from "./FilterResultsComponent";
import { Link } from "react-scroll";
import axios from "axios";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // to choose which category user selects
  const [categories, setCategories] = useState([]); // to fetch categories from backend
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios // Fetch all categories from backend
      .get(`${process.env.REACT_APP_BACKEND_API}/products/categories`)
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/products/categories/${category}`
      ) // API request to fetch products depend on category selection
      .then((response) => {
        setSelectedCategory(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div id="categorySection">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.length > 0 ? (
              categories.map((categoryObj) => (
                <div
                  key={categoryObj.product_category}
                  className="text-center text-gray-500 dark:text-gray-400"
                >
                  <div className="bg-green-50 rounded w-44 h-40 flex items-center justify-center shadow-green-500/50 shadow-md">
                    <Link
                      activeClass="active"
                      className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide p-0 w-full cursor-pointer"
                      to="filterResults"
                      spy={true}
                      smooth={true}
                      offset={-60} // Adjust the offset as needed
                      duration={500}
                      onClick={() =>
                        handleCategoryClick(categoryObj.product_category)
                      }
                    >
                      {categoryObj.product_category}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No Categories Found!</p>
            )}
          </div>
        </div>
      )}
      </div>
      <div id="filterResults">
        {selectedCategory && (
          <FilterResultsComponent selectedCategory={selectedCategory} />
        )}
      </div>
    </section>
  );
};

export default CategoryComponent;
