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
      >
        <MdLocationPin className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
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
