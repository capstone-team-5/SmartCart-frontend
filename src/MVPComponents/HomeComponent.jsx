// This is the home component
import axios from "axios";
import { useState, useEffect } from "react";
import CustomerTestimonialsComponent from "../NonMVPComponents/CustomerTestimonialsComponent";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_BACKEND_API;

const HomeComponent = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error fetching data:", e);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.product_id}>
            <Link to={`/product/${product.product_id}`}>
              <img
                src={product.product_image}
                alt={product.product_name}
                width="200px"
              />
              <p>{product.product_name}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
          </div>
        );
      })}
      <CustomerTestimonialsComponent />
    </div>
  );
};

export default HomeComponent;
