import React, { useState, useEffect } from "react";
import axios from "axios";

const PriceComparisonComponent = ({ cart }) => {
  const [comparison, setComparison] = useState({});
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storeTotalPrices, setStoreTotalPrices] = useState({});

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
        setComparison(response.data.stores);
        setLoading(false);
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
        const storeTotalPrice = cart.reduce((total, item) => {
          const itemPrice = parseFloat(comparison[store.store_id][item.id]);
          const itemQuantity = item.length || 0;

          if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
            return total + itemPrice * itemQuantity;
          }

          return total;
        }, 0);

        newStoreTotalPrices[store.store_id] = storeTotalPrice;
      }
    });

    setStoreTotalPrices(newStoreTotalPrices);
  }, [cart, comparison, stores]);

  // Sort stores by the lowest cart price
  const sortedStores = stores
    .filter((store) => comparison.hasOwnProperty(store.store_id))
    .sort((a, b) => storeTotalPrices[a.store_id] - storeTotalPrices[b.store_id]);

  const renderStoreInfo = (store) => {
    const storeItems = cart.filter((item) =>
      comparison[store.store_id]?.hasOwnProperty(item.id)
    );

    return (
      <div key={store.store_id}>
        <img src={store.store_image} alt={`${store.store_name}`} width="200px" />
        <h3>Store Name: {store.store_name}</h3>
        <p>Address: {store.store_address}</p>
        <p>City: {store.store_city}</p>
        <p>State: {store.store_state}</p>
        <p>Zipcode: {store.store_zipcode}</p>
        <p>Phone Number: {store.store_phone_number}</p>
        <ul>
          {storeItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width='100px' />
              Item: {item.name}
              <br />
              Price per item: ${comparison[store.store_id][item.id]}
              <br />
              Quantity in cart: {item.length || 0}
              <br />
              Total cost for this item: $
              {(
                comparison[store.store_id][item.id] *
                (item.length || 0)
              ).toFixed(2)}
            </li>
          ))}
          <li>Total Cart Price: ${storeTotalPrices[store.store_id]?.toFixed(2)}</li>
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
          {sortedStores.map((store) => renderStoreInfo(store))}
        </div>
      )}
    </div>
  );
};

export default PriceComparisonComponent;


