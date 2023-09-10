//This function will list a sidebar with extensive choices for user to filter
import React, { useEffect, useState } from "react";
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
      value: "", // Store user-selected brand here
    },
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch unique brands from the backend and populate the brands state
    axios.get(`${process.env.REACT_APP_BACKEND_API}/brands`)
      .then((response) => 
        setBrands(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h3>This is the FilterSideBar page</h3>
    </div>
  );
};

export default FilterSideBarComponent;