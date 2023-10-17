// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const WhereDidYouShopComponent = ({ comparison, sortedStores }) => {
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const handleStoreRadioChange = (event) => {
//     setSelectedStore(event.target.value);
//     setErrorMessage("");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (selectedStore === null) {
//       setErrorMessage("Please select an option");
//     } else if (selectedStore === "all_lowest_priced") {
//       console.log("I am a super saver!");
//       navigate(`/user/${id}/savings`);
//     } else {
//       console.log(`I shopped at ${selectedStore}`);
//       navigate(`/user/${id}/savings`);
//     }
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-2xl font-semibold">Where did you shop?</h2>
//       {sortedStores.map((store, index) => (
//         <div key={index} className="flex items-center space-x-2">
//           <label className="flex items-center">
//             <input
//               type="radio"
//               value={store.store_name}
//               checked={selectedStore === store.store_name}
//               onChange={handleStoreRadioChange}
//               className="mr-2"
//             />
//             {store.store_name}
//           </label>
//         </div>
//       ))}
//       <div className="flex items-center space-x-2">
//         <label className="flex items-center">
//           <input
//             type="radio"
//             value="all_lowest_priced"
//             checked={selectedStore === "all_lowest_priced"}
//             onChange={handleStoreRadioChange}
//             className="mr-2"
//           />
//           I got all the lowest-priced items
//         </label>
//       </div>
//       {errorMessage && (
//         <p className="text-red-500">{errorMessage}</p>
//       )}
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
//       >
//         Continue
//       </button>
//     </div>
//   );
// };

// export default WhereDidYouShopComponent;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WhereDidYouShopComponent = ({ sortedStores }) => {
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
    } else if (selectedStore === "all_lowest_priced") {
      console.log("I am a super saver!");
      navigate(`/user/${id}/savings`);
    } else {
      console.log(`I shopped at ${selectedStore}`);
      navigate(`/user/${id}/savings/${selectedStore}`);
    }
  };

  console.log("where did you shop selected Store:", selectedStore);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Where did you shop?</h2>
      {sortedStores.map((store, index) => (
        <div key={index} className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              value={store.store_name}
              checked={selectedStore === store.store_name}
              onChange={handleStoreRadioChange}
              className="mr-2"
            />
            {store.store_name}
          </label>
        </div>
      ))}
      <div className="flex items-center space-x-2">
        <label className="flex items-center">
          <input
            type="radio"
            value="all_lowest_priced"
            checked={selectedStore === "all_lowest_priced"}
            onChange={handleStoreRadioChange}
            className="mr-2"
          />
          I got all the lowest-priced items
        </label>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
      >
        Continue
      </button>
    </div>
  );
};

export default WhereDidYouShopComponent;
