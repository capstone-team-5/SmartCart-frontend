import React, { useState, useEffect } from "react";
import axios from "axios";

const PriceComparisonComponent = ({ cart }) => {
  const [comparison, setComparison] = useState({});
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemQuantities, setItemQuantities] = useState({});
  const [storeTotalPrices, setStoreTotalPrices] = useState({});
    
    console.log('price Compare Cart:', cart)

    // if (cart.length > 1) {
    //     console.log('name:', cart[0].name)
    // }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  }, []);

  useEffect(() => {
    const cartIds = cart.map((food) => food.id);
    const convertIdsToString = cartIds.join(",");
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/compare-prices?productIds=${convertIdsToString}`;

    axios
      .get(backendEndPoint)
      .then((response) => {
        console.log("check", response.data);
        setComparison(response.data.stores);
        setLoading(false);
        if (response.status === 200) {
          console.log("the ids were received");
        } else {
          console.log("the ids were never received");
        }
      })
      .catch((error) => {
        console.error("Error fetching comparison data:", error);
        setLoading(false);
      });
  }, [cart]);

  useEffect(() => {
    const newStoreTotalPrices = {};

    stores.forEach((store) => {
      if (comparison.hasOwnProperty(store.store_id)) {
        const storeTotalPrice = cart
          .filter((item) => comparison[store.store_id].hasOwnProperty(item.id))
          .reduce((total, item) => {
            const itemPrice = parseFloat(comparison[store.store_id][item.id]);
            console.log('itemPrice1:', itemPrice)
            const itemQuantity = itemQuantities[item.id];
            console.log('itemQuantity:', itemQuantity)
              if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
                console.log('total1:', typeof total)
              return total + itemPrice * itemQuantity;
              }
              console.log('total2:', typeof total)
            return total;
          }, 0);
        newStoreTotalPrices[store.store_id] = storeTotalPrice;
      }
    });

    setStoreTotalPrices(newStoreTotalPrices);
  }, [cart, comparison, itemQuantities, stores]);

  const renderStoreInfo = (store) => {
    return (
      <div key={store.store_id}>
        <h3>Store Name: {store.store_name}</h3>
        <p>Address: {store.store_address}</p>
        <p>City: {store.store_city}</p>
        <p>State: {store.store_state}</p>
        <p>Zipcode: {store.store_zipcode}</p>
        <p>Phone Number: {store.store_phone_number}</p>
        <img
          src={store.store_image}
          alt={`${store.store_name}`}
          width="200px"
        />
        <ul>
          {Object.keys(comparison[store.store_id]).map((productId) => (
            <li key={productId}>
              Price: {comparison[store.store_id][productId]}
            </li>
          ))}
          <li>Total: ${storeTotalPrices[store.store_id]?.toFixed(2)}</li>
          <br /> <br />
        </ul>
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <p>Finding stores. Saving you money.</p>
      ) : (
        <div>
          {stores
            .filter((store) => comparison.hasOwnProperty(store.store_id))
            .map((store) => renderStoreInfo(store))}
        </div>
      )}
    </div>
  );
};

export default PriceComparisonComponent;
