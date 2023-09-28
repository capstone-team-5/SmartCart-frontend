// This component will display the favorite items of the user

import { useState, useEffect } from "react";
import axios from "axios";

const FavoritesComponent = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/products`)
            .then((response) => {
                console.log('all products in favorites',response.data);
                const items = response.data;
                const favoriteItems = items.filter((item) => item.isFavorite === true);
                console.log('favorite items:', favoriteItems)
                setFavorites(favoriteItems);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>These are the user's favorite items:</h1>
            <ul>
                {favorites.map((item) => (
                    <li key={item.id}>
                        <img src={item.product_image} alt={item.product_name} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritesComponent;
