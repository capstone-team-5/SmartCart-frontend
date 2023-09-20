import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-scroll";

const FilterResultsComponent = ({ selectedCategory, appliedFilters }) => {
  console.log("Selected category:", selectedCategory);
  console.log("appliedFilters:", appliedFilters);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("Selected category:", selectedCategory);
    console.log("Applied filters:", appliedFilters);

    if (selectedCategory && appliedFilters) {
      let filteredProducts = selectedCategory;

      // Filter by applied filters
      if (Object.keys(appliedFilters).length > 0) {
        filteredProducts = selectedCategory.filter((product) => {
          return Object.keys(appliedFilters).every((filterCategory) => {
            const filterValues = appliedFilters[filterCategory];
            console.log("Filter category:", filterCategory);
            console.log("Filter values:", filterValues);

            if (Array.isArray(filterValues)) {
              // If it's an array (e.g., specialDiets, certifications, healthLabels, allergens)
              const matches = filterValues.some(
                (filterValue) => product[filterCategory][filterValue]
              );
              console.log("Matches:", matches);
              return matches;
            } else {
              // If it's a single value (e.g., brand, category)
              console.log(
                "Product category value:",
                selectedCategory[0]?.product_category
              );
              console.log("Filter value:", appliedFilters.specialDiets);
              console.log("Filter:", appliedFilters.specialDiets);
              console.log("Product category value:", product[filterCategory]);
              console.log("Filter value:", filterValues);
              return product[filterCategory] === filterValues;
            }
          });
        });
      }

      console.log("Filtered products:", filteredProducts);
      setFilteredProducts(filteredProducts);
    }
  }, [appliedFilters, selectedCategory]);

  if (!Array.isArray(selectedCategory) || selectedCategory.length === 0) {
    return (
      <div>
        <p>No Products in this category</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="p-6 text-center text-xl">
        Shopping in {selectedCategory[0].product_category} category
      </h3>
      <RouterLink
        to="categorySection"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <button className="text-blue-500 text-xl">Back to Categories</button>
      </RouterLink>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link to={`/product/${product.product_id}`}>
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-full h-48 object-contain"
                />
              </Link>
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

/*
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import FilterSideBarComponent from "./FilterSideBarComponent";

const FilterResultsComponent = ({ selectedCategory, appliedFilters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyFiltersCallback = (filters) => {
    setFilteredProducts(applyFilters(filters));
  };

  const applyFilters = (filters) => {
    if (selectedCategory && selectedCategory.length > 0) {
      return selectedCategory.filter((product) => {
        return Object.keys(filters).every((filter) => {
          return filters[filter] ? product[filter] : true;
        });
      });
    }
    return [];
  };

  useEffect(() => {
    if (selectedCategory && appliedFilters) {
      const filteredProducts = applyFilters(appliedFilters);
      setFilteredProducts(filteredProducts);
    }
  }, [appliedFilters, selectedCategory]);

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

*/
