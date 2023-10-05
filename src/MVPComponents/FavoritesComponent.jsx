// This component will display the favorite items of the user

import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FavoritesComponent = ({ updatedFavorites, addToCart }) => {
    const { id } = useParams();
    
    console.log("id:", id)

  const handleDeleteFavoriteItem = () => {
    if (window.confirm('Are you sure you want to delete this item from your favorites?')) {
      axios.delete(`${process.env.REACT_APP_BACKEND_API}/favorites/${id}`);
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-4">These are the user's favorite items:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {updatedFavorites.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.image} alt={item.name} className="mx-auto mb-4 rounded-md h-40 w-40" />
            <p className="text-lg font-semibold text-center mb-2">{item.name}</p>
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Add To Cart
              </button>
              <button
                onClick={handleDeleteFavoriteItem}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesComponent;
