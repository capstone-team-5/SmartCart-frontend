// this will display the user location

import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";

const LocationHookComponent = () => {
  const [location, setLocation] = useState(() => {
    const storedLocationData = JSON.parse(
      window.localStorage.getItem("User_Location")
    );
    return storedLocationData || {
      loaded: false,
      coordinates: { lat: "", lng: "" },
      error: null,
    };
  });

  const [displayLocation, setDisplayLocation] = useState(false);

  const handleGetLocationClick = () => {
    if ("geolocation" in navigator) {
      if (displayLocation) {
        setDisplayLocation(false);
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const newLocation = {
              loaded: true,
              coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              error: null,
            };

            window.localStorage.setItem(
              "User_Location",
              JSON.stringify(newLocation)
            );

            setLocation(newLocation);
            setDisplayLocation(true);
          },
          (error) => {
            const newLocation = {
              loaded: true,
              coordinates: { lat: "", lng: "" },
              error: error.message,
            };

            
            window.localStorage.setItem(
              "User_Location",
              JSON.stringify(newLocation)
            );

            setLocation(newLocation);
          }
        );
      }
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation not supported",
      }));
    }
  };

  return (
    <div>
      <button
        onClick={handleGetLocationClick}
        className={`p-2 mr-1 rounded-lg hover:bg-white dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${
          displayLocation ? "bg-white" : ""
        }`}
      >
        <MdLocationPin />
      </button>
      {location.loaded && displayLocation && (
        <div>
          <p>Latitude: {location.coordinates.lat}</p>
          <p>Longitude: {location.coordinates.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LocationHookComponent;
