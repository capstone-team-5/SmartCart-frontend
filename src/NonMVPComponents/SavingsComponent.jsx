//This component will show the user how much money they saved overtime


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SavingsComponent = () => {
  const { id } = useParams();
  const [selectedStore, setSelectedStore] = useState("");
  const [userComparisonData, setUserComparisonData] = useState([]);
  const [savings, setSavings] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('savingsId', id)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/savings/${id}`)
      .then((response) => {
        console.log('savingsData:', response.data);
        setUserComparisonData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    // Calculate the savings based on the selected store and user-specific data
    if (userComparisonData.length > 0) {
      const totalStorePrices = userComparisonData
        .filter((item) => item.store_name === selectedStore)
        .reduce((accumulator, item) => accumulator + item.price, 0);

      const userSavings = (totalStorePrices).toFixed(2);
      setSavings(userSavings);
    }
  }, [userComparisonData, selectedStore]);

  const handleStoreSelection = (store) => {
    // Handle store selection
    setSelectedStore(store);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Your Savings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Select a store to see savings:
          </h3>
          <ul>
            {userComparisonData.length > 0 &&
              [
                ...new Set(userComparisonData.map((item) => item.store_name)),
              ].map((store, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleStoreSelection(store)}
                    className="text-blue-500 underline cursor-pointer"
                  >
                    {store}
                  </button>
                </li>
              ))}
          </ul>
          {selectedStore && savings !== null && (
            <p className="mt-2">
              You saved ${savings} by shopping at <strong>{selectedStore}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsComponent;


