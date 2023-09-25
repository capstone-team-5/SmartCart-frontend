// This component will display the user's search results

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchResultsComponent = ({ addToCart }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_API}/products`)
        .then((response) => {
          const items = response.data;
          const foundItems = items.filter(
            (item) =>
              item.product_name.toLowerCase().includes(query.toLowerCase()) ||
              item.product_category
                .toLowerCase()
                .includes(query.toLowerCase()) ||
              item.product_brand.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredResults(foundItems);
        })
        .catch((error) => console.log(error));
    } else {
      setFilteredResults([]);
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {filteredResults.map((product) => (
          <li key={product.product_id}>
            <div>
              <Link to={`/product/${product.product_id}`}>
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  width="200px"
                />
                <p>{product.product_name}</p>
              </Link>
              <p>{product.product_description}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsComponent;

