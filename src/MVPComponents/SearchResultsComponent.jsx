// This component will display the user's search results

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Search Results:</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredResults.map((product) => (
          <li
            key={product.product_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link to={`/product/${product.product_id}`}>
              {/* Wrap the card with a Link */}
              <div>
                <img
                  src={product.product_image}
                  alt={product.product_name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {product.product_name}
                  </h3>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); 
                      addToCart(product);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsComponent;


