//This will allow the user to enter their location

import { useState, useEffect } from "react";
import axios from "axios";

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState("");
  const [matchedZipCode, setMatchedZipCode] = useState(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (searched) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_API}/stores`)
        .then((response) => {
          console.log(response.data);

          const stores = response.data;
          const zipCode = Number(userLocation);

          const matchedStore = stores.find(
            (store) => store.store_zipcode === zipCode
          );

          if (matchedStore) {
            setMatchedZipCode(matchedStore.store_zipcode);
          } else {
            setMatchedZipCode(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [userLocation, searched]);

  const handleTextChange = (event) => {
    setUserLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  const handleChangeZipCode = () => {
    setMatchedZipCode(null);
    setSearched(false);
  };

  return (
    <div>
      <h3>This is the location page</h3>
      {searched ? (
        !matchedZipCode ? (
          <div>
            <p>Zipcode not found</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Zipcode"
                value={userLocation}
                onChange={handleTextChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
            <button onClick={handleChangeZipCode}>Change Zip Code</button>
            <p>Matched Zip Code: {matchedZipCode}</p>
          </div>
        )
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Zipcode"
              value={userLocation}
              onChange={handleTextChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
