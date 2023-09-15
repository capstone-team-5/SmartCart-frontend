// This function will list all categories

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterResultsComponent from "./FilterResultsComponent";
import axios from "axios";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // to choose which category user selects
  const [categories, setCategories] = useState([]); // to fetch unique categories from backend
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products from backend and extract only unique categories to categories
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.product_category)),
        ];
        setCategories(uniqueCategories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/filter?category=${category}`);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900"> 
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // Render the category buttons
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category} className="flex flex-col items-center">
                <div className="bg-green-50 rounded-full w-44 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
                  <button
                    className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide p-0  w-full"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No Categories Found!</p>
          )}
        </div>
      )}
      {/* Render the products based on selected category */}
      {selectedCategory && <FilterResultsComponent />}
    </div>
  );
};

export default CategoryComponent;
