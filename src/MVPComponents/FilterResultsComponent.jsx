import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import FilterSideBarComponent from "./FilterSideBarComponent";

const FilterResultsComponent = ({ selectedCategory, appliedFilters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);

  const applyFiltersCallback = (filters) => {
    setSelectedCat([]);
    applyFilters(filters);
  };

  const applyFilters = (filters) => {
    // Fetch filtered products based on applied filters
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products/filter`, {
        params: filters,
      })
      .then((response) => {
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (appliedFilters) {
      applyFilters(appliedFilters);
    }
  }, [appliedFilters]);

  if (!Array.isArray(selectedCategory) || selectedCategory.length === 0) {
    return (
      <div>
        <FilterSideBarComponent applyFiltersCallback={applyFiltersCallback} />
        <p>No Products in this category</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="p-6 text-center text-xl">
        Shopping in {selectedCategory[0].product_category} category
      </h3>
      <Link
        to="categorySection"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <button className="text-blue-500 text-xl">Back to Categories</button>
      </Link>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {selectedCategory.map((product) => (
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
      </div>
    </div>
  );
};

export default FilterResultsComponent;
