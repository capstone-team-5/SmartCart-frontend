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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Yogurt Parfait</h3>
      <img
        src="https://simplyhomecooked.com/wp-content/uploads/2021/08/yogurt-parfait-4.jpg"
        alt="Yogurt Parfait"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup Greek yogurt</li>
          <li>1/2 cup granola</li>
          <li>1/2 cup fresh berries (e.g., strawberries, blueberries)</li>
          <li>1 tablespoon honey</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a glass or bowl, layer 1/4 cup Greek
            yogurt at the bottom.
          </li>
          <li>
            <strong>Step 2:</strong> Add 2 tablespoons of granola on top of the
            yogurt.
          </li>
          <li>
            <strong>Step 3:</strong> Add 1/4 cup fresh berries on top of the
            granola.
          </li>
          <li>
            <strong>Step 4:</strong> Repeat the layers until the glass or bowl
            is filled, ending with a few berries on top.
          </li>
          <li>
            <strong>Step 5:</strong> Drizzle honey over the top for added
            sweetness.
          </li>
          <li>
            <strong>Step 6:</strong> Serve the Yogurt Parfait immediately.
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

export default YogurtParfaitRecipeComponent;
