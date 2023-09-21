import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IndividualProductComponent from "../IndividualProductComponent";

import "./ProductList.css";

const API = process.env.REACT_APP_BACKEND_API;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="product-list">
      <div className="product-list__title">Products</div>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product, index) => {
          return (
            <div key={product.product_id} className={index === 0 ? "" : "mt-5"}>
              {/* <Link to={`/product/${product.product_id}`}>
                <img src={product.product_image} alt={product.product_name} />
              </Link> */}
              <IndividualProductComponent item={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
