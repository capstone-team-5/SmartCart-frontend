import React, { useState, useEffect } from "react";
import axios from "axios";

const BreakfastBurritoRecipeComponent = ({
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
        <h3 className="text-2xl font-extrabold mb-8 text-center">Breakfast Burrito</h3>
      <img
        src="https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg"
        alt="breakfast burrito"
        className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
          <li className="mb-4">2 large eggs</li>
          <li className="mb-4">2 sausage links, cooked and sliced</li>
          <li className="mb-4">
            1/4 cup shredded cheese (your choice of cheese)
          </li>
          <li className="mb-4">Salt and pepper to taste</li>
          <li className="mb-4">1 large flour tortilla</li>
          <li className="mb-4">Salsa (optional, for serving)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a bowl, beat the
            eggs and season with salt and pepper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Heat a non-stick
            skillet over medium heat. Pour the beaten eggs into the skillet and
            scramble them until cooked to your liking.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Warm the flour tortilla
            in a dry skillet or microwave.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Place the scrambled
            eggs, sliced sausage, and shredded cheese in the center of the
            tortilla.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Fold the sides of the
            tortilla over the filling and roll it up to form a burrito.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Serve the breakfast
            burrito with salsa, if desired.
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

export default BreakfastBurritoRecipeComponent;
