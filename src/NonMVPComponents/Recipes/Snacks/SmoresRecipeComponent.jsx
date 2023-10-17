import React, { useState, useEffect } from "react";
import axios from "axios";

const SmoresRecipeComponent = ({ addIngredientsToCart, nameOfIngredients }) => {
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
          <h3 className="text-2xl font-extrabold mb-8 text-center">S'mores</h3>
          <img
            src="https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/72-smores.jpg"
            alt="S'mores"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 graham crackers</li>
            <li className="mb-4">1 chocolate bar</li>
            <li className="mb-4">2 marshmallows</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Break the graham
            crackers in half to form two squares.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Place a piece of
            chocolate on one graham cracker square.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Roast the marshmallow
            until golden brown.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Place the marshmallow
            on top of the chocolate.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Top with the other
            graham cracker square and press gently to create a sandwich.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Enjoy your S'mores!
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

export default SmoresRecipeComponent;
