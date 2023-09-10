// This function will display results based on user selected category user and from filter side bar

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FilterResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  // const [products, setProducts] = useState([]); // to fetch all products from backend
  const [filteredProducts, setFilteredProducts] = useState([]); // to filter products based on selected category
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from the backend
    fetch(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => response.json())
      .then((data) => {
        if (selectedCategory) {
          // If a category is selected, filter the products
          const filtered = data.filter(
            (product) => product.product_category === selectedCategory
          );
          setFilteredProducts(filtered);
        } else {
          // If no category is selected, set all products
          setFilteredProducts(data);
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
            filteredProducts.map((product) => (
              <div
                key={product.product_id}
                className="rounded-lg shadow-green-500/50 border shadow-md overflow-hidden"
              >
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {product.product_name}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterResultsComponent;
