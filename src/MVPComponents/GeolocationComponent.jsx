import { useState, useEffect } from "react";

const Geolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const success = () => {
    setLocation((prevState) => ({
      ...prevState,
      loaded: true,
      coordinates: {
        lat: prevState.coordinates.lat,
        lng: prevState.coordinates.lng,
      },
    }));
  };

  const errorMessage = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      errorMessage({
        code: 0,
        message: "Geolocation not supported",
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, errorMessage);
    }
  }, []);

  return (
    <div>
      <h1>This is the geolocation component</h1>
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available"}
    </div>
  );
};

export default Geolocation;
