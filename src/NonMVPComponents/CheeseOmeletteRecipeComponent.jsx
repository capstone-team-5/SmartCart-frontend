// This will be a cheese omelette

import React, { useState, useEffect } from "react";
import axios from "axios";

const CheeseOmeletteRecipeComponent = ({
  addIngredientsToCart,
  nameOfIngredients
}) => {
  const [message, setMessage] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Fetch all items from your API
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => {
        setAllItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all items:", error);
      });
  }, []);

  useEffect(() => {
    if (nameOfIngredients && nameOfIngredients.length > 0) {
      const filtered = allItems.filter((item) =>
        nameOfIngredients.includes(item.product_name)
      );
      setFilteredItems(filtered);
    }
  }, [nameOfIngredients, allItems]);


  const handleAddToCartClick = () => {
    try {
      const newItemAddedToFood = [];
      if (addIngredientsToCart && filteredItems.length > 0) {

        filteredItems.forEach((product) => {
          const food = {
            name: product.product_name,
            image: product.product_image,
            id: product.product_id,
            length: 1,
          };
        
          newItemAddedToFood.push(food); 
        });

        addIngredientsToCart(newItemAddedToFood);

        setMessage("Ingredients have been added to your cart.");
      } else {
        setMessage("No specific ingredients selected to add to the cart.");
      }
    } catch (error) {
      console.error("Error adding ingredients to cart:", error);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Cheese Omelette</h3>
      <img
        src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktopimages/15492.jpg?ext=.jpg"
        alt="cheese omelette"
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>3 large eggs</li>
          <li>1 tablespoon milk, or as needed</li>
          <li>salt and freshly ground white pepper to taste</li>
          <li>2 tablespoons butter</li>
          <li>¼ cup shredded cheese</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Whisk eggs in a bowl; add milk and season
            with salt and white pepper. Whisk until egg mixture is foamy, 2 to 3
            minutes.
          </li>
          <li>
            <strong>Step 2:</strong> Melt butter in a small, nonstick skillet
            over medium-low heat. Pour in egg mixture and swirl the skillet, so
            the bottom is evenly covered with egg. Cook until egg starts to set,
            about 1 minute. Lift edges with a spatula and tilt the skillet so
            uncooked egg can flow towards the bottom of the skillet to set.
            Repeat until no visible liquid egg remains.
          </li>
          <li>
            <strong>Step 3:</strong> Carefully flip omelette; cook until warmed
            through, 30 seconds to 1 minute. Sprinkle cheese down the middle of
            omelette; fold in half. Cook until cheese is melted, about 20
            seconds. Slide omelette onto a plate.
          </li>
          <li>
            <strong>Step 4:</strong> Carefully fold one side of the omelette
            over the other, covering the cheese. Cook until cheese is completely
            melted and omelette is firm but not browned, 2 to 3 minutes. Slide
            omelette onto a plate.
          </li>
          <li>
            <strong>Step 5:</strong> Season omelette with salt and white pepper.
            Cut into wedges and serve immediately.
          </li>
        </ol>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAddToCartClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Add Ingredients To Cart
        </button>
      </div>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default CheeseOmeletteRecipeComponent;