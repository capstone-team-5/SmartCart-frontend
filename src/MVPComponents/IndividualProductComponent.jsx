// This component will display individual products

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndividualProductComponent = ({ handleAddToCart, cartLength }) => {
  const [showOneItem, setShowOneItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`)
      .then((response) => setShowOneItem(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {showOneItem && (
        <>
          <img
            src={showOneItem.product_image}
            alt={showOneItem.product_name}
            width="350px"
          />
          <strong>
            <h1>{showOneItem.product_name}</h1>
          </strong>
          <p>{showOneItem.product_description}</p>
          <p>
            {showOneItem.product_weight} {showOneItem.product_unit}
          </p>
          <br />
        </>
      )}
      
      <button onClick={() => handleAddToCart(showOneItem)}>Add To Cart</button>
    </div>
  );
};

export default IndividualProductComponent;


