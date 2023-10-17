import React, { useState, useEffect } from "react";
import axios from "axios";

const VeganCurryRecipeComponent = ({
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
            Vegan Curry
          </h3>
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2021/01/Vegan-Curry-010.jpg"
            alt="Vegan Curry"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">
              2 cups mixed vegetables (e.g., carrots, bell peppers, broccoli)
            </li>
            <li className="mb-4">1 cup chickpeas, cooked</li>
            <li className="mb-4">1 onion, chopped</li>
            <li className="mb-4">3 cloves garlic, minced</li>
            <li className="mb-4">1-inch piece of ginger, grated</li>
            <li className="mb-4">1 can (14 oz) coconut milk</li>
            <li className="mb-4">2 tablespoons curry powder</li>
            <li className="mb-4">1 tablespoon vegetable oil</li>
            <li className="mb-4">Salt and pepper to taste</li>
            <li className="mb-4">Fresh cilantro leaves for garnish</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Heat vegetable oil in a
            large pan over medium heat. Add chopped onion, garlic, and grated
            ginger. Sauté until fragrant and onions are translucent.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Add mixed vegetables
            and chickpeas to the pan. Cook for a few minutes until the
            vegetables start to soften.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Stir in curry powder
            and cook for another minute.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Pour in coconut milk
            and season with salt and pepper. Simmer for about 15-20 minutes, or
            until the vegetables are tender and the sauce thickens.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Garnish with fresh
            cilantro leaves and serve hot with rice or naan.
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

export default VeganCurryRecipeComponent;
