import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SavingsComponent = ({ comparison }) => {
  const { id, selectedStore } = useParams(); 
  const [savings, setSavings] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, [id]);

  useEffect(() => {
    // Calculate the savings based on the selected store and user-specific data
    if (comparison) {
      console.log('comparison1:', comparison)
      const selectedStoreData = comparison[selectedStore] || [];
      console.log('selectedStoreData:', selectedStoreData)
      const totalSavings = selectedStoreData.reduce(
        (accumulator, item) => accumulator + parseFloat(item),
        0
      );
      setSavings(totalSavings.toFixed(2));
    }
  }, [comparison, selectedStore]);

  console.log('savings id:', comparison[1])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Your Savings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4">
          {savings !== null && (
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
