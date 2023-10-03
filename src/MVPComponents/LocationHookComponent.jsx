// this will display the user location

// import React, { useState } from "react";
// import { MdLocationPin } from "react-icons/md";

// const LocationHookComponent = () => {
//   const [location, setLocation] = useState(() => {
//     const storedLocationData = JSON.parse(
//       window.localStorage.getItem("User_Location")
//     );
//     return storedLocationData || {
//       loaded: false,
//       coordinates: { lat: "", lng: "" },
//       error: null,
//     };
//   });

//   const [displayLocation, setDisplayLocation] = useState(false);

//   const handleGetLocationClick = () => {
//     if ("geolocation" in navigator) {
//       if (displayLocation) {
//         setDisplayLocation(false);
//       } else {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const newLocation = {
//               loaded: true,
//               coordinates: {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude,
//               },
//               error: null,
//             };

//             window.localStorage.setItem(
//               "User_Location",
//               JSON.stringify(newLocation)
//             );

//             setLocation(newLocation);
//             setDisplayLocation(true);
//           },
//           (error) => {
//             const newLocation = {
//               loaded: true,
//               coordinates: { lat: "", lng: "" },
//               error: error.message,
//             };

            
//             window.localStorage.setItem(
//               "User_Location",
//               JSON.stringify(newLocation)
//             );

//             setLocation(newLocation);
//           }
//         );
//       }
//     } else {
//       setLocation((prevState) => ({
//         ...prevState,
//         error: "Geolocation not supported",
//       }));
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleGetLocationClick}
//       >
//         <MdLocationPin className="text-white hover:text-black peer text-xl md:text-2xl sm:text-lg cursor-pointer" />
//       </button>
//       {location.loaded && displayLocation && (
//         <div>
//           <p>Latitude: {location.coordinates.lat}</p>
//           <p>Longitude: {location.coordinates.lng}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationHookComponent;



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
  const [distance, setDistance] = useState(5); 

  useEffect(() => {
    if (location.coordinates.lat && location.coordinates.lng) {
      fetchLocationDetails(location.coordinates.lat, location.coordinates.lng, distance);
    }
  }, [location.coordinates, distance]);

  useEffect(() => {
    if (location.loaded && location.coordinates.lat && location.coordinates.lng) {
      // Fetch location name from the backend API using axios
      fetchLocationDetails(location.coordinates.lat, location.coordinates.lng, distance);
    }
  }, [location.loaded, location.coordinates, distance]);

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

            // Log latitude and longitude before making the request
            console.log("Latitude:", newLocation.coordinates.lat);
            console.log("Longitude:", newLocation.coordinates.lng);

            // Fetch location details here using latitude, longitude, and distance
            fetchLocationDetails(newLocation.coordinates.lat, newLocation.coordinates.lng, distance);
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
  const fetchLocationDetails = (latitude, longitude, distance) => {
    // Fetch location details using axios
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/location?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
    
    axios
      .get(backendEndPoint)
      .then((response) => {
        const data = response.data;
        console.log("Fetched location details:", data.result);
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
