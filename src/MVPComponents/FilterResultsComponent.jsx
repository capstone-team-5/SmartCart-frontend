// This function will display results based on user selected category user and from filter side bar

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FilterResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const [filteredProducts, setFilteredProducts] = useState([]); // to filter products based on selected category
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from the backend
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        if (selectedCategory) {
          // If a category is selected, filter the products
          const filtered = response.data.filter(
            (product) => product.product_category === selectedCategory
          );
          setFilteredProducts(filtered);
        } else {
          // If no category is selected, set all products
          setFilteredProducts(response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div>
      <h3>Shopping in {selectedCategory} category</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    className="w-full h-48 object-contain"
                  />

                  <div className="p-4">
                    <h2 className="text-lg text-center font-semibold">
                      {product.product_name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterResultsComponent;
