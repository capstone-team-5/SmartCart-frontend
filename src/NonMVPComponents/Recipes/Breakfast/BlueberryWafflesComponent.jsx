//This component will be for the blueberry waffles

import React, { useState, useEffect } from "react";
import axios from "axios";

const BlueberryWafflesRecipeComponent = ({
  addIngredientsToCart,
  nameOfIngredients,
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
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow-md rounded-lg">
    <div className="grid grid-cols-2">
      <div>
        <h3 className="text-2xl font-extrabold mb-8 text-center">Blueberry Waffles</h3>
      <img
        src="https://bakingmischief.com/wp-content/uploads/2021/02/blueberry-waffles-image-square-4.jpg"
        alt="blueberry waffles"
        className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
          <li className="mb-4">1 1/2 cups all-purpose flour</li>
          <li className="mb-4">2 tablespoons sugar</li>
          <li className="mb-4">1 tablespoon baking powder</li>
          <li className="mb-4">1/2 teaspoon salt</li>
          <li className="mb-4">1 1/4 cups milk</li>
          <li className="mb-4">1/4 cup vegetable oil</li>
          <li className="mb-4">2 large eggs</li>
          <li className="mb-4">1 teaspoon vanilla extract</li>
          <li className="mb-4">1 cup fresh blueberries</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a large bowl, whisk together the flour,
            sugar, baking powder, and salt.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In another bowl, whisk together the milk,
            vegetable oil, eggs, and vanilla extract.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Pour the wet ingredients into the dry
            ingredients and stir until just combined.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Gently fold in the fresh blueberries.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Preheat a waffle iron and grease it. Pour
            batter onto the waffle iron and cook until golden brown.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Serve the blueberry waffles hot with your
            favorite toppings.
          </li>
        </ol>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAddToCartClick}
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Add All Ingredients To Cart
        </button>
      </div>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default BlueberryWafflesRecipeComponent;
