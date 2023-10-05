// This component will display the favorite items of the user

import React from 'react';

const FavoritesComponent = ({ updatedFavorites, addToCart}) => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-4">These are the user's favorite items:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {updatedFavorites.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.image} alt={item.name} className="mx-auto mb-2 rounded-md h-40 w-40" />
                <p className="text-lg font-semibold text-center">{item.name}</p>
                <button onClick={() => addToCart(item)} >Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesComponent;
