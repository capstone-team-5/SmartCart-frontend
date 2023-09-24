import React, { useState} from "react";

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

  const handleGetLocationClick = () => {
    if ("geolocation" in navigator) {
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

          // Store the location data in local storage
          window.localStorage.setItem("User_Location", JSON.stringify(newLocation));

          setLocation(newLocation);
        },
        (error) => {
          const newLocation = {
            loaded: true,
            coordinates: { lat: "", lng: "" },
            error: error.message,
          };
          
          // Store the error message in local storage
          window.localStorage.setItem("User_Location", JSON.stringify(newLocation));

          setLocation(newLocation);
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation not supported",
      }));
    }
  };

  return (
    <div>
      <button onClick={handleGetLocationClick}>Get My Location</button>
      {location.loaded ? (
        <div>
          <p>Latitude: {location.coordinates.lat}</p>
          <p>Longitude: {location.coordinates.lng}</p>
        </div>
      ) : (
        <p>{location.error || "Location data not available"}</p>
      )}
    </div>
  );
};

export default LocationHookComponent;
