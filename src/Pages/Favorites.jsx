//This page is for the favorites

import FavoritesComponent from "../MVPComponents/FavoritesComponent";

const Favorites = ({ updatedFavorites, addToCart, addAllFavorites, user }) => {
  return (
    <div>
      <FavoritesComponent
        updatedFavorites={updatedFavorites}
        addToCart={addToCart}
        addAllFavorites={addAllFavorites}
        user={user}
      />
    </div>
  );
};

export default Favorites;
