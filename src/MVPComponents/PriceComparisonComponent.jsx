//This Component Will Compare Your Entire Cart Across Stores

import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, useParams } from "react-router-dom";

const PriceComparisonComponent = ({
  cart,
  stores,
  comparison,
  sortedStores,
}) => {
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

  console.log("store_accepts_EBT:", storeDetails.store_accepts_EBT);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div>
        {loadingMessages.length > 0 ? (
          <div className="text-center">
            <p className="text-3xl">{loadingMessages[loadingIndex]}</p>
            {loadingIndex === 2 && showDrumRoll ? (
              <div>
                {/* <p className="text-2xl font-bold"></p>
                <img
                  src="https://media0.giphy.com/media/YqWtkg0PflgGdwjrtc/giphy.gif?cid=6c09b952ugqlrnk8zvzvjkowgp2y63wn21s6466w6khi0ggr&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                  alt="Drum Roll"
                  className="mx-auto mt-4"
                /> */}
              </div>
            ) : (
              <FadeLoader
                color={"#de8613"}
                loading={true}
                size={1000}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mx-auto my-4"
              />
            )}
          </div>
        ) : (
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Price Comparison Results
              </h2>
              <h3 className="mb-4 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                {" "}
                Unbelievable Prices with smrtCART
              </h3>
            </div>
            <div className="grid gap-8 mb-6 sm:grid-cols-2 md:grid-cols-3">
              {sortedStores.map((store, index) => (
                <div
                  key={store.store_id}
                  className="bg-gray-50 rounded-xl shadow-lg p-5 mb-4 flex flex-col justify-between"
                >
                  {index === 0 ? (
                    <div>
                      <h1 className="text-2xl font-bold">Best Value</h1>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-2xl font-bold">Total Cart Price</h1>
                    </div>
                  )}
                  <h1 className="text-3xl font-bold">
                    ${storeTotalPrices[store.store_id]?.toFixed(2)}
                  </h1>
                  <img
                    className="w-full shadow-xl rounded-xl mb-4 h-48 object-cover"
                    src={store.store_image}
                    alt={`${store.store_name}`}
                  />
                  <div className="border rounded-lg p-6 bg-gray-100">
                    <div className="flex flex-col items-start mb-4">
                      <span className="font-bold">
                        Store Name: {store.store_name}
                      </span>
                    </div>
                    <div className="flex flex-col items-start mb-4">
                      <span className="font-bold">Store Details:</span>
                      <p>{store.store_address}</p>
                      <p>{store.store_city}</p>
                      <p>
                        {store.store_state}, {store.store_zipcode}
                      </p>
                      <p>{store.store_phone_number}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleDetails(store.store_id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4 mb-4"
                  >
                    {storeDetails[store.store_id] ? "Show Less" : "Show More"}
                  </button>
                  {storeDetails[store.store_id] && (
                    <ul>
                      <div className="grid gap-8 mb-6 sm:grid-cols-2 md:grid-cols-3">
                        {cart.map((item) => (
                          <div
                            key={item.id}
                            className="bg-gray-50 rounded-xl shadow-lg p-5 mb-4 flex flex-col justify-between"
                          >
                            <li>
                              <img
                                className="w-full shadow-xl rounded-xl mb-4 h-48 object-contain"
                                src={item.image}
                                alt={item.name}
                              />
                              <div className="flex flex-col items-center">
                                <h3 className="text-xl font-bold mb-4 mt-4">
                                  Item: {item.name}
                                </h3>
                                <h3 className="text-xl font-bold mb-4 mt-4">
                                  Price per item: $
                                  {comparison[store.store_id][item.id]}
                                </h3>
                                <h3 className="text-xl font-bold mb-4 mt-4">
                                  Quantity in cart: {item.length || 0}
                                </h3>
                                <h3 className="text-xl font-bold mb-4 mt-4">
                                  Total cost for this item: $
                                  {(
                                    comparison[store.store_id][item.id] *
                                    (item.length || 0)
                                  ).toFixed(2)}
                                </h3>
                              </div>
                            </li>
                          </div>
                        ))}
                      </div>
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <Link to={`/user/${id}/where-did-you-shop`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 mt-4 mb-4">
                See Your Savings
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PriceComparisonComponent;
