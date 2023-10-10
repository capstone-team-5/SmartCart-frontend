import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FavoritesComponent = ({
  updatedFavorites,
  addToCart,
  addAllFavorites,
  user,
}) => {
  const [favorites, setFavorites] = useState([]);

  const filteredFavorites = updatedFavorites.filter(
    (item) => Object.keys(item).length > 0
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/favorites/${user}`)
      .then((response) => {
        setFavorites(response.data);
      });
  });

  const handleDeleteFavoriteItem = (product_id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this item from your favorites?"
      )
    ) {
      // console.log('product delete:', product_id)
      // console.log('user delete:', user)
      // axios.delete(
      //   `${process.env.REACT_APP_BACKEND_API}/favorites/${user}/${product_id}`
      // );
    }
  };

  const handleAddAllFavoritesToCart = () => {
    const allFavoriteItems = filteredFavorites.map((item) => ({
      name: item.name,
      image: item.image,
      id: item.id,
      length: 1,
    }));

    console.log("all:", allFavoriteItems);
    addAllFavorites(allFavoriteItems);
  };

  return (
    <div className="py-8 px-8 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-center mb-16 dark:text-white">
        View Your Favorites
      </h1>
      <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1 px-16 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {favorites.map((item) => (
          <div
            key={item.product_id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={item.product_image}
              alt={item.product_name}
              className="mx-auto mb-4 rounded-md h-40 w-40"
            />
            <p className="text-2xl font-semibold text-center mb-4">
              {item.product_name}
            </p>
            <div className="flex justify-center space-x-2 mt-8 mb-4">
              <button
                onClick={() => addToCart(item)}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Add To Cart
              </button>
              <button
                onClick={() => handleDeleteFavoriteItem(item.product_id)}
                className="bg-red-500 hover:bg-red-700 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddAllFavoritesToCart}
        className="mt-4 mx-auto block bg-green-500 hover:bg-green-700 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        Add All Favorites To Cart
      </button>
    </div>
  );
};

export default FavoritesComponent;
