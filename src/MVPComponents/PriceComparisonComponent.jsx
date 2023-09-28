//This Component Will Compare Your Entire Cart Across Stores


import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useParams } from "react-router-dom";

const PriceComparisonComponent = ({ cart, stores, comparison, sortedStores }) => {
  const [storeTotalPrices, setStoreTotalPrices] = useState({});
  const [storeDetails, setStoreDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const newStoreTotalPrices = {};

    stores.forEach((store) => {
      if (comparison.hasOwnProperty(store.store_id)) {
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

  const [loadingMessages, setLoadingMessages] = useState([
    "Finding Shops In Your Area",
    "Calculating Your Savings",
  ]);

  const [loadingIndex, setLoadingIndex] = useState(0);
  const [showDrumRoll, setShowDrumRoll] = useState(false);

  useEffect(() => {
    const loadingTimer = setInterval(() => {
      setLoadingIndex((prevIndex) => prevIndex + 1);
    }, 1500);

    if (loadingIndex >= loadingMessages.length) {
      clearInterval(loadingTimer);
      setShowDrumRoll(true);

      setTimeout(() => {
        setLoadingMessages([]);
      }, 0);
    }

    return () => {
      clearInterval(loadingTimer);
    };
  }, [loadingIndex, loadingMessages]);

  const toggleDetails = (storeId) => {
    setStoreDetails((prevDetails) => ({
      ...prevDetails,
      [storeId]: !prevDetails[storeId],
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {loadingMessages.length > 0 ? (
        <div className="text-center">
          <p className="text-xl">{loadingMessages[loadingIndex]}</p>
          {loadingIndex === 2 && showDrumRoll ? (
            <div>
              <p className="text-2xl font-bold">Drum Roll !!!!</p>
              <img
                src="https://media0.giphy.com/media/YqWtkg0PflgGdwjrtc/giphy.gif?cid=6c09b952ugqlrnk8zvzvjkowgp2y63wn21s6466w6khi0ggr&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                alt="Drum Roll"
                className="mx-auto mt-4"
              />
            </div>
          ) : (
            <FadeLoader
              color={"#de8613"}
              loading={true}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="mx-auto my-4"
            />
          )}
        </div>
      ) : (
        <div>
          {sortedStores.map((store, index) => (
            <div key={store.store_id} className="border p-4 my-4">
              {index === 0 ? (
                <div>
                  <h1 className="text-2xl font-bold">Best Value</h1>
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl font-bold">Total Cart Price</h1>
                </div>
              )}
              <h1 className="text-3xl font-bold">${storeTotalPrices[store.store_id]?.toFixed(2)}</h1>
              <img
                src={store.store_image}
                alt={`${store.store_name}`}
                width="200px"
                className="my-2"
              />
              <h3 className="text-xl">Store Name: {store.store_name}</h3>
              <p>Address: {store.store_address}</p>
              <p>City: {store.store_city}</p>
              <p>State: {store.store_state}</p>
              <p>Zipcode: {store.store_zipcode}</p>
              <p>Phone Number: {store.store_phone_number}</p>
              <button
                onClick={() => toggleDetails(store.store_id)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {storeDetails[store.store_id] ? "Show Less" : "Show More"}
              </button>
              {storeDetails[store.store_id] && (
                <ul>
                  {cart.map((item) => (
                    <div key={item.id}>
                      <li>
                        <img src={item.image} alt={item.name} width="100px" />
                        Item: {item.name}
                        <br />
                        Price per item: ${comparison[store.store_id][item.id]}
                        <br />
                        Quantity in cart: {item.length || 0}
                        <br />
                        Total cost for this item: $
                        {(
                          comparison[store.store_id][item.id] * (item.length || 0)
                        ).toFixed(2)}
                      </li>
                    </div>
                  ))}
                  <br /> <br />
                </ul>
              )}
            </div>
          ))}
          <Link to={`/user/${id}/where-did-you-shop`}>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              See Your Savings
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PriceComparisonComponent;
