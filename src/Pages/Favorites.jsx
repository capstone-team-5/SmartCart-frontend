//This page is for the favorites

import FavoritesComponent from "../MVPComponents/FavoritesComponent"

const Favorites = ({updatedFavorites, addToCart}) => {

    return (
        <div>
            <FavoritesComponent updatedFavorites={updatedFavorites} addToCart={addToCart}  />
        </div>
    )
};

export default Favorites;