//This will have the chocolate chip pancakes recipe

import React, { useState, useEffect } from "react";
import axios from "axios";

const ChocolateChipPancakesRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Chocolate Chip Pancakes</h3>
      <img
        src="https://tornadoughalli.com/wp-content/uploads/2019/07/CHOCOLATE-CHIP-PANCAKES-12.jpg"
        alt="chocolate chip pancakes"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup all-purpose flour</li>
          <li>2 tablespoons sugar</li>
          <li>1 teaspoon baking powder</li>
          <li>1/2 teaspoon baking soda</li>
          <li>1/2 teaspoon salt</li>
          <li>1 cup buttermilk</li>
          <li>1/4 cup milk</li>
          <li>1 egg</li>
          <li>2 tablespoons melted butter</li>
          <li>1/2 cup chocolate chips</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large bowl, combine the flour, sugar,
            baking powder, baking soda, and salt.
          </li>
          <li>
            <strong>Step 2:</strong> In another bowl, beat together the
            buttermilk, milk, egg, and melted butter. Pour the wet ingredients
            into the dry ingredients and stir until just blended.
          </li>
          <li>
            <strong>Step 3:</strong> Heat a griddle or non-stick skillet over
            medium-high heat. Pour 1/4 cup of batter onto the griddle for each
            pancake. Sprinkle chocolate chips on top of each pancake.
          </li>
          <li>
            <strong>Step 4:</strong> Cook until bubbles form on the surface,
            then flip and cook until browned on the other side.
          </li>
          <li>
            <strong>Step 5:</strong> Serve hot with your favorite toppings.
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

export default ChocolateChipPancakesRecipeComponent;
