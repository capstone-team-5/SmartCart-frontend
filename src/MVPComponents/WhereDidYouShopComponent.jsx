//This component will be used for the user to answer which store they shopped at


import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WhereDidYouShopComponent = ({ comparison, sortedStores }) => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 

  const navigate = useNavigate();
  const { id } = useParams();

  const handleStoreRadioChange = (event) => {
    setSelectedStore(event.target.value);
    setErrorMessage(""); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedStore === null) {
      setErrorMessage("Please select an option"); 
    } else if (selectedStore === 'all_lowest_priced') {
      console.log('I am a super saver!');
      navigate(`/user/${id}/savings`);
    } else {
      console.log(`I shopped at ${selectedStore}`);
      navigate(`/user/${id}/savings`);
    }
  };

  return (
    <div>
      {sortedStores.map((store, index) => (
        <div key={index}>
          <label>
            {store.store_name}
            <input
              type="radio"
              value={store.store_name}
              checked={selectedStore === store.store_name}
              onChange={handleStoreRadioChange}
            />
          </label>
          <br />
        </div>
      ))}
      <div>
        <label>
          I got all the lowest priced items
          <input
            type="radio"
            value="all_lowest_priced"
            checked={selectedStore === "all_lowest_priced"}
            onChange={handleStoreRadioChange}
          />
        </label>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} 
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default WhereDidYouShopComponent;
