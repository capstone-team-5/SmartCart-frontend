import React, { useState, useEffect } from "react";
import axios from "axios";

const WholeWheatVeggieWrapRecipeComponent = ({
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
          <h3 className="text-2xl font-extrabold mb-8 text-center">
            Whole-Wheat Veggie Wrap
          </h3>
          <img
            src="https://www.eatingwell.com/thmb/LXaZhfk1F8PEEQ2IUbV88RwzJA8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4548031-ed05dced770140b790dc6b75ae29be7b.jpg"
            alt="Whole-Wheat Veggie Wrap"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 whole-wheat tortilla wrap</li>
            <li className="mb-4">1/2 cup hummus</li>
            <li className="mb-4">
              1/2 cup mixed greens (e.g., spinach, lettuce)
            </li>
            <li className="mb-4">1/4 cup sliced cucumber</li>
            <li className="mb-4">1/4 cup sliced bell peppers</li>
            <li className="mb-4">1/4 cup shredded carrots</li>
            <li className="mb-4">1/4 cup sliced cherry tomatoes</li>
            <li className="mb-4">Salt and pepper to taste</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Lay the whole-wheat
            tortilla wrap flat on a clean surface.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Spread hummus evenly
            over the tortilla.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Layer mixed greens,
            sliced cucumber, bell peppers, shredded carrots, and sliced cherry
            tomatoes over the hummus.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Season with salt and
            pepper to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Fold in the sides of
            the tortilla and roll it up tightly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Slice the wrap in half
            diagonally.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Serve the Whole-Wheat
            Veggie Wrap immediately or wrap it in parchment paper for later.
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

export default WholeWheatVeggieWrapRecipeComponent;
