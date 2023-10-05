// this will display the user location

import React, { useState, useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";

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

  const [locationName, setLocationName] = useState("");
  const [displayLocation, setDisplayLocation] = useState(false);
 

  useEffect(() => {
    if (location.coordinates.lat && location.coordinates.lng) {
      fetchLocationDetails(location.coordinates.lat, location.coordinates.lng);
    }
  }, [location.coordinates]);

  useEffect(() => {
    if (location.loaded && location.coordinates.lat && location.coordinates.lng) {
      // Fetch location name from the backend API using axios
      fetchLocationDetails(location.coordinates.lat, location.coordinates.lng);
    }
  }, [location.loaded, location.coordinates]);

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

            // console.log("Latitude:", newLocation.coordinates.lat);
            // console.log("Longitude:", newLocation.coordinates.lng);

            fetchLocationDetails(newLocation.coordinates.lat, newLocation.coordinates.lng);
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

  // Function to fetch location details from the backend
  const fetchLocationDetails = () => {
    const latitude = location.coordinates.lat 
    const longitude = location.coordinates.lng
    console.log('lng1',longitude)
    console.log('lat1:', latitude)
    if (!latitude || !longitude) {
      return null;
    }
    // const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/locations?latitude=${latitude}&longitude=${longitude}`;
    // const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/locations/${40.739634}/${-73.794490}`;
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/locations/${latitude}/${longitude}`;
    

    
    axios
      .get(backendEndPoint)
      .then((response) => {
        const data = response.data;
        console.log("Fetched location details:", data);
        setLocationName(data.result.location_name);
      })
      .catch((error) => {
        console.error("Error fetching location details:", error);
      });
  };

  return (
    <div>
      <button onClick={handleGetLocationClick}>
        <MdLocationPin className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
      </button>
      {location.loaded && locationName && (
        <div>
          <p>Location: {locationName}</p>
        </div>
      )}
    </div>
  );
};

export default LocationHookComponent;
