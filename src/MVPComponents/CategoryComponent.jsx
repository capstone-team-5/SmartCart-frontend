// This function will list all categories

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // to choose which category user selects
  const [categories, setCategories] = useState([]); // to fetch unique categories from backend
  const [products, setProducts] = useState([]); // to fetch all products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // to filter products based on selected category

  const { filteredCategory } = useParams();

  useEffect(() => {
    // Fetch all products from backend and extract only unique categories to categories
    fetch(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((item) => item.product_category)),
        ];
        setCategories(uniqueCategories);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Check if a category is selected and filter products accordingly
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.product_category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Function to handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Render the category buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category}
              className="flex flex-col items-center"
              onClick={() => handleCategorySelection(category)}
            >
              <div className="bg-green-50 rounded-full w-44 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
                <button
                  className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide p-0  w-full"
                  onClick={() => handleCategorySelection(category)}
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
      {/* Render the products based on selected category */}
      {selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <FilterResults
                key={item.product_id}
                filteredCategory={selectedCategory}
              />
            ))
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
      ) : (
        <p>Please select a category.</p>
      )}
    </div>
  );
};

export default CategoryComponent;
