import React, { useState, useEffect } from "react";
import axios from "axios";

const GrilledCheeseSandwichRecipeComponent = ({
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
            Grilled Cheese Sandwich
          </h3>
          <img
            src="https://www.cooking-therapy.com/wp-content/uploads/2021/09/Roasted-Squash-Grilled-Cheese-4-2.jpg"
            alt="Grilled Cheese Sandwich"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 slices of bread</li>
            <li className="mb-4">
              2 slices of cheese (e.g., cheddar, American)
            </li>
            <li className="mb-4">2 tablespoons butter</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Place a slice of cheese
            between two slices of bread to form a sandwich.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Heat a skillet or
            griddle over medium-low heat.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Melt 1 tablespoon of
            butter in the skillet or on the griddle.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Place the sandwich in
            the skillet and cook until the bread is golden brown and crispy.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Flip the sandwich,
            adding the remaining tablespoon of butter to the skillet if needed.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Cook until the second
            side is golden brown and the cheese is melted.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Remove from heat,
            slice, and serve the Grilled Cheese sandwich hot.
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

export default GrilledCheeseSandwichRecipeComponent;
