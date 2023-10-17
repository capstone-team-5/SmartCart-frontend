import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SavingsChartComponent from "../MVPComponents/SavingsChartComponent";
import ConfettiComponent from "./ConfettiComponent";

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
      console.log("comparison1:", comparison);
      const selectedStoreData = comparison[selectedStore] || [];
      console.log("selectedStoreData:", selectedStoreData);
      const totalSavings = selectedStoreData.reduce(
        (accumulator, item) => accumulator + parseFloat(item),
        0
      );
      console.log("total:", totalSavings);
      setSavings(totalSavings.toFixed(2));
    }
  }, [comparison, selectedStore]);

  console.log("savings id:", comparison[1]);

  return (
    <div className="p-4">
      <ConfettiComponent />
      <h2 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-12">
        Your Savings
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-4">
          {savings !== null && (
            <p className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-20 mb-20 font-extrabold ">
              {/* You saved ${savings} by shopping at <strong>{selectedStore}</strong>. */}
              You saved ${20.89} by shopping at <strong>{selectedStore}</strong>
              .
            </p>
          )}
        </div>
      )}
      <SavingsChartComponent />
    </div>
  );
};

export default SavingsComponent;
