//This component will be used for the user to answer which store they shopped at

import React, { useState } from "react";

const WhereDidYouShopComponent = ({ comparison, sortedStores }) => {
  const [selectedStores, setSelectedStores] = useState({});

  const handleStoreCheckboxChange = (event) => {
    const storeName = event.target.value;
    setSelectedStores((prevSelectedStores) => ({
      ...prevSelectedStores,
      [storeName]: !prevSelectedStores[storeName],
    }));
  };

  return (
    <div>
      {sortedStores.map((store, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={store.store_name}
              checked={selectedStores[store.store_name] || false}
              onChange={handleStoreCheckboxChange}
            />
            {store.store_name}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
};

export default WhereDidYouShopComponent;
