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
            "Vegan_Friendly",
            "Stock",
            "Non_Processed",
            "Tree_Nuts_Free",
            "Egg_Free",
            "Shellfish_Free",
            "Fish_Free",
            "Low_Caffeine",
            "Wheat_Free",
            "Mediterranean_Diet",
            "High_Antioxidant",
            "Non_GMO",
            "Low_Lactose",
            "Whole30",
            "Paleo_Friendly",
            "Soy_Free",
            "Heart_Healthy",
            "Low_Fat",
            "Sugar_Free",
            "Fair_Trade_Certified",
            "USDA_Organic",
            "Pescatarian",
            "Peanut_Free",
            "Caffeine",
            "High_Protein",
            "Dairy_Free",
            "No_Preservatives",
            "No_Added_Sugar",
            "Nuts_Free",
            "Keto_Friendly",
            "Probiotic",
            "Low_Carb_Diet",
            "Low_Sugar",
            "Sesame_Free",
            "High_Fiber",
            "Gluten_Free",
            "Low_Sodium",
          ]}
        />
      )}
    </div>
  );
};

export default FilterButtonComponent;
