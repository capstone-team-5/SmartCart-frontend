import React, { useState, useEffect } from "react";
import axios from "axios";

const BajanCouCouRecipeComponent = ({
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
            Bajan Cou Cou with Flying Fish
          </h3>
          <img
            src="https://mybajan.com/wp-content/uploads/2020/04/barbados-cou-cou-fish-bajan-recipe-678x381.jpg"
            alt="Bajan Cou Cou with Flying Fish"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 cup cornmeal</li>
            <li className="mb-4">2 cups water</li>
            <li className="mb-4">1 cup okra, chopped</li>
            <li className="mb-4">1 onion, finely chopped</li>
            <li className="mb-4">1 bell pepper, finely chopped</li>
            <li className="mb-4">2 cloves garlic, minced</li>
            <li className="mb-4">1 cup coconut milk</li>
            <li className="mb-4">2 tablespoons butter</li>
            <li className="mb-4">Salt and pepper to taste</li>
            <li className="mb-4">Flying fish fillets</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a saucepan, combine
            cornmeal and water. Mix well and let it sit for about 15 minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Add okra, onion, bell
            pepper, and garlic to the mixture. Cook over low heat, stirring
            constantly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Gradually add coconut
            milk and butter. Continue to cook and stir until the mixture is
            smooth and has a creamy consistency.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Season with salt and
            pepper to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Serve hot with fried
            flying fish fillets.
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

export default BajanCouCouRecipeComponent;
