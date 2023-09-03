// This is the home component
import axios from "axios";
import { useState, useEffect } from "react";
import CustomerTestimonialsComponent from "../NonMVPComponents/CustomerTestimonialsComponent";

const API = process.env.REACT_APP_BACKEND_API;

const HomeComponent = () => {
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
      <h1>LIST OF THE PRODUCTS</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.product_id}>{product.product_name}</li>;
        })}
      </ul>
      <CustomerTestimonialsComponent />
    </div>
  );
};

export default HomeComponent;
