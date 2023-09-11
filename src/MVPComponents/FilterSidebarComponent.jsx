import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterSideBarComponent = ({ applyFilters }) => {
  const initialFilters = {
    specialDiets: [
      { name: "Vegan", value: "product_is_vegan", checked: false },
      { name: "Vegetarian", value: "product_is_vegetarian", checked: false },
      // Add other Special Diets options
    ],
    certifications: [
      {
        name: "USDA Organic",
        value: "product_is_usda_organic",
        checked: false,
      },
      {
        name: "Non-GMO Project Verified",
        value: "product_is_non_gmo_project_verified",
        checked: false,
      },
      // Add other Certification options
    ],
    healthLabels: [
      {
        name: "Heart Healthy",
        value: "product_is_heart_healthy",
        checked: false,
      },
      { name: "High Fiber", value: "product_is_high_fiber", checked: false },
      // Add other Health Label options
    ],
    allergens: [
      { name: "Gluten-Free", value: "product_is_gluten", checked: false },
      { name: "Peanut-Free", value: "product_is_peanut", checked: false },
      // Add other Allergen options
    ],
    brand: {
      name: "Brand",
      value: "", // Storing the brand user has selected
    },
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from backend and extract only unique brands
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        const uniqueBrands = [
          ...new Set(response.data.map((item) => item.product_brand)),
        ];
        setBrands(uniqueBrands);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const handleCheckboxChange = (category, value) => {
    // Update the selectedFilters state when a checkbox is checked/unchecked
    const updatedFilters = { ...selectedFilters };
    const selectedCategory = updatedFilters[category];
    const selectedOption = selectedCategory.find(
      (option) => option.value === value
    );
    selectedOption.checked = !selectedOption.checked;
    setSelectedFilters(updatedFilters);
  };

  const handleBrandChange = (brand) => {
    // Update the selected brand in the selectedFilters state
    const updatedFilters = { ...selectedFilters };
    updatedFilters.brand.value = brand;
    setSelectedFilters(updatedFilters);
  };

  // Define the applyFilters function here, so it has access to selectedFilters
  const handleApplyFilters = () => {
    console.log("Applying filters...");
    console.log("selectedFilters:", selectedFilters);
    console.log("typeof applyFilters:", typeof applyFilters);

    // Call the applyFilters function and pass the selectedFilters state
    if (typeof applyFilters === "function") {
      const appliedFilters = {
        specialDiets: selectedFilters.specialDiets.filter(
          (option) => option.checked
        ),
        certifications: selectedFilters.certifications.filter(
          (option) => option.checked
        ),
        healthLabels: selectedFilters.healthLabels.filter(
          (option) => option.checked
        ),
        allergens: selectedFilters.allergens.filter((option) => option.checked),
        brand: selectedFilters.brand.value,
      };
      applyFilters(appliedFilters);
    } else {
      console.error("applyFilters is not a function");
    }
  };

  return (
    <div>
      {/* Render filter options */}
      <div>
        <h3>Special Diets</h3>
        {selectedFilters.specialDiets.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              onChange={() =>
                handleCheckboxChange("specialDiets", option.value)
              }
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render certification options */}
      <div>
        <h3>Certifications</h3>
        {selectedFilters.certifications.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              onChange={() =>
                handleCheckboxChange("certifications", option.value)
              }
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render health label options */}
      <div>
        <h3>Health Labels</h3>
        {selectedFilters.healthLabels.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              onChange={() =>
                handleCheckboxChange("healthLabels", option.value)
              }
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render allergen options */}
      <div>
        <h3>Allergens</h3>
        {selectedFilters.allergens.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              onChange={() => handleCheckboxChange("allergens", option.value)}
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render brand options */}
      <div>
        <h3>Brand</h3>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="radio"
              value={brand}
              checked={selectedFilters.brand.value === brand}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Apply filters button */}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterSideBarComponent;
