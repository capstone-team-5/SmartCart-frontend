//This page is for the favorites

import FavoritesComponent from "../MVPComponents/FavoritesComponent"

const Favorites = ({updatedFavorites, addToCart, addAllFavorites}) => {

    return (
        <div>
            <FavoritesComponent updatedFavorites={updatedFavorites} addToCart={addToCart} addAllFavorites={addAllFavorites}  />
        </div>
    )
};

export default Favorites;