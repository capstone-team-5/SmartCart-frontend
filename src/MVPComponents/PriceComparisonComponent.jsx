//This Component Will Compare Your Entire Cart Across Stores

import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";

const PriceComparisonComponent = ({ cart }) => {
  const [comparison, setComparison] = useState({});
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState("Finding Shops In Your Area");
  const [storeTotalPrices, setStoreTotalPrices] = useState({});


  console.log("price Compare Cart:", cart);

  // if (cart.length > 1) {
  //     console.log('name:', cart[0].name)
  // }

  const [showDrumRoll, setShowDrumRoll] = useState(false);


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

        setTimeout(() => {
          setLoading('Calculating Your Savings');
        }, 3000);

        setTimeout(() => {
          setLoading('Drum Roll !!!!');
          setShowDrumRoll(true);
        }, 6000);

        setTimeout(() => {
          setLoading(false);
        }, 9000);
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
            console.log("itemPrice1:", itemPrice);
            const itemQuantity = itemQuantities[item.id];
            console.log("itemQuantity:", itemQuantity);
            if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
              console.log("total1:", typeof total);
              return total + itemPrice * itemQuantity;
            }
            console.log("total2:", typeof total);
            return total;
          }, 0);

        const storeTotalPrice = cart.reduce((total, item) => {
          const itemPrice = Number(comparison[store.store_id][item.id]);
          const itemQuantity = item.length || 0;

          if (Number(itemPrice) && Number(itemQuantity)) {
            return total + itemPrice * itemQuantity;
          }

          return total;
        }, 0);


        newStoreTotalPrices[store.store_id] = storeTotalPrice;
      }
    });

    setStoreTotalPrices(newStoreTotalPrices);
  }, [cart, comparison, stores]);

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
      {loading !== false ? (
        <div>
          <p>{loading}</p>
          {showDrumRoll ? (
            <img
              src="https://media0.giphy.com/media/YqWtkg0PflgGdwjrtc/giphy.gif?cid=6c09b952ugqlrnk8zvzvjkowgp2y63wn21s6466w6khi0ggr&ep=v1_stickers_related&rid=giphy.gif&ct=s"
              alt="Drum Roll"
            />
          ) : (
            <FadeLoader
              color={'#de8613'}
              loading={true}
              size={10000}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div>
      ) : (
        <div>
          {sortedStores.map((store) => renderStoreInfo(store))}
        </div>
      )}
    </div>
  );
};

export default PriceComparisonComponent;

