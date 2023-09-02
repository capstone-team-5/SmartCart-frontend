import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterMenu from "./FilterMenuComponent";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const FilterButtonComponent = () => {
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openFilterMenu = () => {
    setFilterMenuOpen(true);
  };

  const applyFilters = (selectedFilters) => {
    setFilterMenuOpen(false);
    const queryParams = new URLSearchParams(); // Create a container for the filter values we want to add to the URL
    queryParams.delete("filters"); // Clear any previously set "filters" parameter from the container
    selectedFilters.forEach((filter) => {
      queryParams.append("filters", filter); // Add each filter value to the container as a separate "filters" parameter
    });

    navigate(`/filter-results?${queryParams.toString()}`); // Navigate to a new URL with the filter values added as parameters
  };

  return (
    <div>
      <button onClick={openFilterMenu}>
        <TbAdjustmentsHorizontal size={24} /> Filter
      </button>

      {isFilterMenuOpen && (
        <FilterMenu
          onClose={() => setFilterMenuOpen(false)}
          onApply={applyFilters}
          filterOptions={[
            "Fresh",
            "Frozen",
            "Vegetarian",
            "SeaFood",
            "Gluten Free",
            "Halal",
            "Kosher",
            "Organic",
            "Vegan",
            "Stock",
            "Non_Processed",
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
          ]}
        />
      )}
    </div>
  );
};

export default FilterButtonComponent;