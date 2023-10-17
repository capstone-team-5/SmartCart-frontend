import React, { useState, useEffect } from "react";
import axios from "axios";

const BaconCheeseburgerRecipe1Component = ({
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
            Bacon Cheeseburger
          </h3>
          <img
            src="https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
            alt="Bacon Cheeseburger"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1/2 lb ground beef</li>
            <li className="mb-4">2 slices of bacon</li>
            <li className="mb-4">2 slices of cheddar cheese</li>
            <li className="mb-4">2 hamburger buns</li>
            <li className="mb-4">Lettuce leaves</li>
            <li className="mb-4">Sliced tomato</li>
            <li className="mb-4">Sliced red onion</li>
            <li className="mb-4">Ketchup and mustard</li>
            <li className="mb-4">Salt and pepper to taste</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Cook bacon in a skillet
            until crispy. Remove and drain on paper towels.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In the same skillet,
            cook ground beef over medium-high heat until browned. Season with
            salt and pepper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Place cheddar cheese
            slices on top of the beef patties to melt.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Toast hamburger buns in
            the skillet or on the grill.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Assemble the burgers by
            placing lettuce leaves, a beef patty with melted cheese, bacon
            slices, sliced tomato, and red onion on the bun.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Add ketchup and mustard
            to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Top with the other bun
            half and serve the Bacon Cheeseburger immediately.
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

export default BaconCheeseburgerRecipe1Component;
