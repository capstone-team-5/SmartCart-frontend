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
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Search Results
          </h2>
        </div>

        <div className="grid gap-8 mb-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredResults.map((product) => (
            <div
              key={product.product_id}
              className="bg-gray-50 rounded-xl shadow-lg p-5 mb-4 flex flex-col justify-between"
            >
              <Link to={`/product/${product.product_id}`}>
                <img
                  className="w-full shadow-xl rounded-xl mb-4 h-48 object-contain"
                  src={product.product_image}
                  alt={product.product_name}
                />
              </Link>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 mt-4">
                  <Link to={`/product/${product.product_id}`}>
                    {product.product_name}
                  </Link>
                </h3>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    addToCart(product);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4 mb-4"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResultsComponent;
