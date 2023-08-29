//This function will display results after user has applied filters
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FilterResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedFilters = queryParams.getAll("filters");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`,
          {
            params: {
              filters: selectedFilters,
            },
          }
        );
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchFilteredProducts();
  }, [selectedFilters]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <div key={product.product_id}>
            <img src={product.product_image} alt={product.product_name} />
            <p>{product.product_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterResultsComponent;
