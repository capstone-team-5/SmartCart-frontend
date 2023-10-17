import React, { useState, useEffect } from "react";
import axios from "axios";

const YogurtParfaitRecipeComponent = ({
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
            Yogurt Parfait
          </h3>
          <img
            src="https://simplyhomecooked.com/wp-content/uploads/2021/08/yogurt-parfait-4.jpg"
            alt="Yogurt Parfait"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 cup Greek yogurt</li>
            <li className="mb-4">1/2 cup granola</li>
            <li className="mb-4">
              1/2 cup fresh berries (e.g., strawberries, blueberries)
            </li>
            <li className="mb-4">1 tablespoon honey</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a glass or bowl,
            layer 1/4 cup Greek yogurt at the bottom.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Add 2 tablespoons of
            granola on top of the yogurt.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Add 1/4 cup fresh
            berries on top of the granola.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Repeat the layers until
            the glass or bowl is filled, ending with a few berries on top.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Drizzle honey over the
            top for added sweetness.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Serve the Yogurt
            Parfait immediately.
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

export default YogurtParfaitRecipeComponent;
