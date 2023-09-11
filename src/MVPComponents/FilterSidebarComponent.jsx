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
    category: {
      name: "Categories",
      value: "", // Storing the category user has selected
    },
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch all products from backend and extract only unique brands
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        const uniqueBrands = [
          ...new Set(response.data.map((item) => item.product_brand)),
        ];
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.product_category)),
        ];
        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
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

  const handleCategoryChange = (category) => {
    // Update the selected category in the selectedFilters state
    const updatedFilters = { ...selectedFilters };
    updatedFilters.category.value = category;
    setSelectedFilters(updatedFilters);
  };

  // Define the applyFilters function here, so it has access to selectedFilters
  const handleApplyFilters = () => {
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
        category: selectedFilters.category.value,
      };
      applyFilters(appliedFilters);
    } else {
      console.error("applyFilters is not a function");
    }
  };

  return (
    <div className="bg-white p-4 md:p-8 md:w-1/3 shadow-lg rounded-lg">
      {/* Render filter options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Special Diets</h3>
        {selectedFilters.specialDiets.map((option) => (
          <label key={option.value} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
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
        <h3 className="text-lg font-semibold mb-2">Certifications</h3>
        {selectedFilters.certifications.map((option) => (
          <label key={option.value} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
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
        <h3 className="text-lg font-semibold mb-2">Health Labels</h3>
        {selectedFilters.healthLabels.map((option) => (
          <label key={option.value} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
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
        <h3 className="text-lg font-semibold mb-2">Allergens</h3>
        {selectedFilters.allergens.map((option) => (
          <label key={option.value} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
              onChange={() => handleCheckboxChange("allergens", option.value)}
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render brand options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Brand</h3>
        {brands.map((brand) => (
          <label key={brand} className="block mb-2">
            <input
              type="radio"
              value={brand}
              checked={selectedFilters.brand.value === brand}
              className="mr-2"
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Render category options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <label key={category} className="block mb-2">
            <input
              type="radio"
              value={category}
              checked={selectedFilters.category.value === category}
              className="mr-2"
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      {/* Apply filters button */}
      <button
        onClick={handleApplyFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-lg"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSideBarComponent;
