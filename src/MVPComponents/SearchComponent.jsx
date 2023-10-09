// This function will allow users to search for grocery items

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_API}/products`)
        .then((response) => {
          const items = response.data;
          const productNamesSet = new Set();
          const foundItems = items
            .filter((item) => {
              const lowerCaseProductName = item.product_name.toLowerCase();
              if (!productNamesSet.has(lowerCaseProductName)) {
                productNamesSet.add(lowerCaseProductName);
                return (
                  lowerCaseProductName.includes(searchQuery.toLowerCase()) ||
                  item.product_category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.product_brand
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                );
              }
              return false;
            })
            .sort((a, b) => {
              const aExactMatch =
                a.product_name.toLowerCase() === searchQuery.toLowerCase();
              const bExactMatch =
                b.product_name.toLowerCase() === searchQuery.toLowerCase();

              if (aExactMatch && !bExactMatch) return -1;
              if (!aExactMatch && bExactMatch) return 1;

              const aStartsWithQuery = a.product_name
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase());
              const bStartsWithQuery = b.product_name
                .toLowerCase()
                .startsWith(searchQuery.toLowerCase());

              if (aStartsWithQuery && !bStartsWithQuery) return -1;
              if (!aStartsWithQuery && bStartsWithQuery) return 1;

              return a.product_name.localeCompare(b.product_name);
            });

          setProducts(foundItems);
        })
        .catch((error) => console.log(error));
    } else {
      setProducts([]);
    }
    setClickedProduct(false);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setClickedProduct(false);
  };

  const handleProductClicked = (productName) => {
    setSearchQuery(productName);
    setSearchQuery("");
    setClickedProduct(true);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search for a product..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <div key={product.product_id}>
              <Link
                to={`/search-results/${product.product_name}`}
                onClick={() => handleProductClicked(product.product_name)}
              >
                <strong>
                  <h3>{product.product_name}</h3>
                </strong>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {searchQuery && !clickedProduct
            ? "This product does not exist."
            : null}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
