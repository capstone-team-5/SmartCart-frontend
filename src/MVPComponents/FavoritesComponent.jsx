import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const FavoritesComponent = ({ updatedFavorites, addToCart, addAllFavorites, user }) => {

  const [favorites, setFavorites] = useState([])

  const filteredFavorites = updatedFavorites.filter((item) => Object.keys(item).length > 0);


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_API}/favorites/${user}`)
      .then((response) => {
        setFavorites(response.data)
    })
  })


  const handleDeleteFavoriteItem = (product_id) => {
      if (window.confirm('Are you sure you want to delete this item from your favorites?')) {
          // console.log('product delete:', product_id)
          // console.log('user delete:', user)
          axios.delete(`${process.env.REACT_APP_BACKEND_API}/favorites/${user}/${product_id}`);
    }
  };

  const handleAddAllFavoritesToCart = () => {
    const allFavoriteItems = filteredFavorites.map((item) => ({
      name: item.name,
      image: item.image,
      id: item.id,
      length: 1,
    }));

    console.log('all:', allFavoriteItems)
    addAllFavorites(allFavoriteItems);
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-4">These are the user's favorite items:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((item) => (
          <div key={item.product_id} className="bg-white rounded-lg shadow-md p-4">
            <img src={item.product_image} alt={item.product_name} className="mx-auto mb-4 rounded-md h-40 w-40" />
            <p className="text-lg font-semibold text-center mb-2">{item.product_name}</p>
            <div className="flex justify-center space-x-2">
              <button
                onClick={() => addToCart(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Add To Cart
              </button>
              <button
                onClick={() => handleDeleteFavoriteItem(item.product_id)}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddAllFavoritesToCart}
        className="mt-4 mx-auto block bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-md"
      >
        Add All Favorites To Cart
      </button>
    </div>
  );
};

export default FavoritesComponent;
