// This function will create various filters on grocery items for the user

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
    const queryParams = new URLSearchParams();
    selectedFilters.forEach((filter) => {
      queryParams.append("filters", filter);
    });
    navigate(`/filter-results?${queryParams.toString()}`);
  };

  return (
    <div>
      <button onClick={openFilterMenu}>
        <TbAdjustmentsHorizontal size={24} /> Open Filter
      </button>

      {isFilterMenuOpen && (
        <FilterMenu
          onClose={() => setFilterMenuOpen(false)}
          onApply={applyFilters}
        />
      )}
    </div>
  );
};

export default FilterButtonComponent;
