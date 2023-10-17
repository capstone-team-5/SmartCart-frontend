import React, { useState, useEffect } from "react";
import axios from "axios";

const TunaMeltRecipeComponent = ({
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
            Tuna Melt
          </h3>
          <img
            src="https://food.unl.edu/styles/large/public/recipes/tuna-melt.jpg?itok=4Jn_zItB"
            alt="Tuna Melt"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 can (6 ounces) tuna, drained</li>
            <li className="mb-4">1/4 cup mayonnaise</li>
            <li className="mb-4">2 tablespoons diced celery</li>
            <li className="mb-4">2 tablespoons diced red onion</li>
            <li className="mb-4">1 tablespoon sweet pickle relish</li>
            <li className="mb-4">1 teaspoon Dijon mustard</li>
            <li className="mb-4">4 slices of bread</li>
            <li className="mb-4">4 slices of Swiss cheese</li>
            <li className="mb-4">Butter for grilling</li>
            <li className="mb-4">Salt and pepper to taste</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a bowl, mix together
            tuna, mayonnaise, celery, red onion, sweet pickle relish, and Dijon
            mustard. Season with salt and pepper to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Spread the tuna mixture
            evenly on 2 slices of bread.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Top each tuna-covered
            slice with a slice of Swiss cheese.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Place the remaining 2
            slices of bread on top to form sandwiches.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Butter the outsides of
            the sandwiches.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Heat a skillet over
            medium heat and grill the sandwiches until golden brown on both
            sides and the cheese is melted.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Slice and serve the
            Tuna Melt sandwiches hot.
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

export default TunaMeltRecipeComponent;
