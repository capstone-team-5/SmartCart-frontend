import { useState, useEffect } from "react";
import FilterResultsComponent from "./FilterResultsComponent";
import axios from "axios";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
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

  const handleCategoryClick = (category) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setIsLoading(false);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {categories.length > 0 ? (
                categories.map((categoryObj) => (
                  <div
                    key={categoryObj.product_category}
                    className="text-center text-gray-500 dark:text-gray-400"
                  >
                    <div className="bg-green-50 rounded w-44 h-40 flex items-center justify-center shadow-green-500/50 shadow-md">
                      <button
                        className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide p-0 w-full"
                        onClick={() =>
                          handleCategoryClick(categoryObj.product_category)
                        }
                      >
                        {categoryObj.product_category}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Categories Found!</p>
              )}
            </div>
          </div>
        </div>
      )}

      {selectedCategory && (
        <FilterResultsComponent selectedCategory={selectedCategory} />
      )}
    </section>
  );
};

export default CategoryComponent;
