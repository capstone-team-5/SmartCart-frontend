//This function will display results after user has applied filters
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FilterResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedFilters = queryParams.getAll("filters");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/products`
        );
        setAllProducts(response.data);

        // Separate boolean and category filters
        const booleanFilters = [];
        const categoryFilters = [];

        selectedFilters.forEach((filter) => {
          if (filter.startsWith("product_is_")) {
            booleanFilters.push(filter);
          } else if (
            [
              "Dairy",
              "Fruits",
              "Vegetables",
              "Snacks",
              "Breakfast",
              "Bakery",
              "Beverages",
              "Seafood",
              "Nuts",
              "Pasta",
            ].includes(filter)
          ) {
            categoryFilters.push(filter);
          }
        });

        // Filter the products based on selected filters
        const updatedFilteredProducts = response.data.filter((product) => {
          const booleanFilterSatisfied = booleanFilters.every((filter) => {
            const filterField = `product_is_${filter.toLowerCase()}`;
            return product[filterField];
          });

          const categoryFilterSatisfied = categoryFilters.some((filter) => {
            return product.product_category === filter;
          });

          return (
            booleanFilterSatisfied &&
            (categoryFilters.length === 0 || categoryFilterSatisfied)
          );
        });

        setFilteredProducts(updatedFilteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [selectedFilters]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 border border-blue-500">
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
