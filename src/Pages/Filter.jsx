import { useState, useEffect } from "react";
import CategoryPage from "./CategoryPage";
import FilterResultsComponent from "../MVPComponents/FilterResultsComponent";
import axios from "axios";

const Filter = ({ addToCart }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        setOriginalData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
    <div>
      <CategoryPage applyFilters={applyFilters} />
      {Object.keys(selectedFilters).length > 0 && (
        <FilterResultsComponent addToCart={addToCart} data={filteredData} />
      )}
    </div>
  );
};

export default Filter;

/*
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

*/
