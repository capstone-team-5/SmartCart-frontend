// This function will create a menu with checkboxes for filter for the user
import React, { useState } from "react";
const FilterMenuComponent = ({ onClose, onApply, filterOptions }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    // responsible for toggling the check box of filters
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const clearFilters = () => {
    // resets the selectedFilters array
    setSelectedFilters([]);
  };

  const applyFilters = () => {
    onApply(selectedFilters);
  };

  return (
    <div className="filter-menu">
      {filterOptions.map((filter) => (
        <div key={filter}>
          <input
            type="checkbox"
            id={filter}
            checked={selectedFilters.includes(filter)}
            onChange={() => handleFilterChange(filter)}
          />
          <label htmlFor={filter}>{filter}</label>
        </div>
      ))}
      <button onClick={applyFilters}>Apply</button>
      <button onClick={clearFilters}>Clear All</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FilterMenuComponent;
