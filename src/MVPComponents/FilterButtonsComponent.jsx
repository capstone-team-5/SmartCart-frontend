//This function will create various filters on grocery items for the user
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterResults from "../MVPComponents/FilterResultsComponent";

const FilterButtonsComponent = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const { theme } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (theme) {
      const filtered = data.filter(
        (product) =>
          product.product_name.includes(theme) ||
          product.product_description.includes(theme) ||
          product.product_category.includes(theme) ||
          product.product_brand.includes(theme) ||
          product.product_allergens.includes(theme) ||
          product.product_special_diet.includes(theme) ||
          product.product_health_label.includes(theme) ||
          product.product_certification.includes(theme) ||
          product.product_allergens.includes(theme) ||
          product.product_is_fresh.includes(true) ||
          product.product_is_frozen.includes(true) ||
          product.product_is_halal.includes(true) ||
          product.product_is_kosher.includes(true) ||
          product.product_is_non_processed.includes(true) ||
          product.product_is_organic.includes(true) ||
          product.product_is_vegetarian.includes(true) ||
          product.product_is_stock.includes(true) ||
          product.product_is_vegan.includes(true) ||
          product.product_is_seafood.includes(true)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [selectedTheme, data, theme]);

  const handleThemeClick = (theme) => {
    navigate(`/filter/${theme}`);
  };
  return (
    <div>
      <hr />
      <h6 className="text-xl text-red-900"> Start </h6>
      {!theme ? (
        <>
          <button onClick={() => handleThemeClick("Store")}>Store</button>
          <button onClick={() => handleThemeClick("Vegetarian")}>
            Vegetarian
          </button>
          <button onClick={() => handleThemeClick("Special Diet")}>
            Special Diet
          </button>
          <button onClick={() => handleThemeClick("Meat")}>Meat</button>
          <button onClick={() => handleThemeClick("Brand")}>Brand</button>
          <button onClick={() => handleThemeClick("NonProcessed")}>
            Non Processed Foods
          </button>
          <button onClick={() => handleThemeClick("Organic")}>Organic</button>
          <button onClick={() => handleThemeClick("Stock")}>In Stock</button>
          <button onClick={() => handleThemeClick("Allergens")}>
            Allergens
          </button>
          <button onClick={() => handleThemeClick("Health Label")}>
            Health Label
          </button>
          <button onClick={() => handleThemeClick("Certification")}>
            Certification
          </button>
          <button onClick={() => handleThemeClick("Meat")}>Meat</button>
          <button onClick={() => handleThemeClick("Dairy")}>Dairy</button>
          <button onClick={() => handleThemeClick("Vegan")}>Vegan</button>
          <button onClick={() => handleThemeClick("SeaFood")}>SeaFood</button>
          <button onClick={() => handleThemeClick("Fresh")}>Fresh</button>
          <button onClick={() => handleThemeClick("Halal")}>Halal</button>
          <button onClick={() => handleThemeClick("Kosher")}>Kosher</button>
          <button onClick={() => handleThemeClick("Frozen")}>Frozen</button>
        </>
      ) : null}
      <div>
        {theme
          ? filteredData.map((item) => (
              <FilterResults key={item.id} cat={item} />
            ))
          : null}
      </div>
      <h6 className="text-xl text-red-900"> End </h6>
      <hr />
    </div>
  );
};

export default FilterButtonsComponent;
