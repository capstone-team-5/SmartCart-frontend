import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterSideBarComponent = ({ applyFiltersCallback }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const [originalData, setOriginalData] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
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
      { name: "Treenut-Free", value: "product_is_treenut", checked: false },
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
  });

  // Fetch all products from backend and extract only unique brands
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/products`
        );
        const uniqueBrands = [
          ...new Set(response.data.map((item) => item.product_brand)),
        ];
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.product_category)),
        ];
        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
        setOriginalData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (category, index) => {
    const updatedFilters = { ...filters };
    updatedFilters[category][index].checked =
      !updatedFilters[category][index].checked;
    setFilters(updatedFilters);
  };

  const handleBrandChange = (brand) => {
    // Update the selected brand in the filters state
    const updatedFilters = { ...filters };
    updatedFilters.brand.value = brand;
    setFilters(updatedFilters);
  };

  const handleCategoryChange = (category) => {
    // Update the selected category in the filters state
    const updatedFilters = { ...filters };
    updatedFilters.category.value = category;
    setFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    applyFiltersCallback(filters);
  };

  const clearFilters = () => {
    const resetFilters = {
      specialDiets: filters.specialDiets.map((item) => ({
        ...item,
        checked: false,
      })),
      certifications: filters.certifications.map((item) => ({
        ...item,
        checked: false,
      })),
      healthLabels: filters.healthLabels.map((item) => ({
        ...item,
        checked: false,
      })),
      allergens: filters.allergens.map((item) => ({ ...item, checked: false })),
      brand: { ...filters.brand, value: "" },
      category: { ...filters.category, value: "" },
    };
    setFilters(resetFilters);
  };

  // Function to apply filters
  const applyFilters = (filters) => {
    setSelectedFilters(filters);
    const filteredData = filterDataWithFilters(filters, originalData);
    console.log("final", filters, filteredData);
    setFilteredData(filteredData);
  };

  // Function to filter data based on the selected filters
  const filterDataWithFilters = (filters, data) => {
    let filteredData = [...data];
    // Apply filters for special diets
    if (filters.specialDiets.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.specialDiets.some((specialDiet) => {
          // Check if the item's special diet matches any selected special diet
          return item[specialDiet.value] === true;
        });
      });
    }

    // Apply filters for certifications
    if (filters.certifications.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.certifications.some((certification) => {
          // Check if the item has the selected certification
          return item[certification.value] === true;
        });
      });
    }

    // Apply filters for health labels
    if (filters.healthLabels.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.healthLabels.some((healthLabel) => {
          // Check if the item has the selected health label
          return item[healthLabel.value] === true;
        });
      });
    }

    // Apply filters for allergens
    if (filters.allergens.length > 0) {
      filteredData = filteredData.filter((item) => {
        return filters.allergens.some((allergen) => {
          // Check if the item is allergen-free as selected
          return item[allergen.value] === false;
        });
      });
    }

    // Apply filter for brand
    if (filters.brand) {
      filteredData = filteredData.filter((item) => {
        // Check if the item's brand matches the selected brand
        return item.product_brand === filters.brand;
      });
    }

    // Apply filter for category
    if (filters.category) {
      filteredData = filteredData.filter((item) => {
        // Check if the item's category matches the selected category
        return item.product_category === filters.category;
      });
    }

    return filteredData;
  };

  return (
    <div className="shadow-lg p-4 md:p-8 rounded-lg bg-red-50 dark:bg-gray-900">
      <h2 className="text-lg font-bold mb-2">Filter Options</h2>
      {/* Render filter options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Special Diets</h3>
        {filters.specialDiets.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
              onChange={() => handleCheckboxChange("specialDiets", index)}
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render certification options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Certifications</h3>
        {filters.certifications.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
              onChange={() => handleCheckboxChange("certifications", index)}
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render health label options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Health Labels</h3>
        {filters.healthLabels.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
              onChange={() => handleCheckboxChange("healthLabels", index)}
            />
            {option.name}
          </label>
        ))}
      </div>

      {/* Render allergen options */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Allergens</h3>
        {filters.allergens.map((option, index) => (
          <label key={index} className="block mb-2">
            <input
              type="checkbox"
              value={option.value}
              checked={option.checked}
              className="mr-2"
              onChange={() => handleCheckboxChange("allergens", index)}
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
              checked={filters.brand.value === brand}
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
              checked={filters.category.value === category}
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
      <button
        onClick={clearFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-lg"
      >
        Clear All
      </button>
    </div>
  );
};

export default FilterSideBarComponent;
