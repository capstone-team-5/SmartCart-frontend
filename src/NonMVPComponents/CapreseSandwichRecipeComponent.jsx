import React, { useState, useEffect } from "react";
import axios from "axios";

const CapreseSandwichRecipeComponent = ({
  addIngredientsToCart,
  nameOfIngredients
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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Caprese Sandwich</h3>
      <img
        src="https://www.eatingwell.com/thmb/uAo_rveXpw6wB0j01eOstQoLS9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-sandwich-e0bb2b846cf14cd7a0eb2d3f4d4b6aa2.jpg"
        alt="Caprese Sandwich"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 slices of ciabatta or baguette</li>
          <li>2 slices of fresh mozzarella cheese</li>
          <li>2 slices of ripe tomatoes</li>
          <li>Fresh basil leaves</li>
          <li>1 tablespoon extra-virgin olive oil</li>
          <li>Balsamic glaze (optional)</li>
          <li>Salt and pepper to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Drizzle olive oil on one side of each
            bread slice.
          </li>
          <li>
            <strong>Step 2:</strong> Layer one slice of mozzarella, tomato
            slices, and fresh basil leaves on one slice of bread.
          </li>
          <li>
            <strong>Step 3:</strong> Season with salt and pepper to taste.
          </li>
          <li>
            <strong>Step 4:</strong> Place the second slice of bread on top to
            form a sandwich.
          </li>
          <li>
            <strong>Step 5:</strong> Optionally, drizzle balsamic glaze over the
            sandwich.
          </li>
          <li>
            <strong>Step 6:</strong> Serve the Caprese Sandwich immediately.
          </li>
        </ol>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAddToCartClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Add Ingredients To Cart
        </button>
      </div>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default CapreseSandwichRecipeComponent;
