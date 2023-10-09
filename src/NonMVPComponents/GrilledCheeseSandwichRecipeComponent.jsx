import React, { useState, useEffect } from "react";
import axios from "axios";

const GrilledCheeseSandwichRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Grilled Cheese Sandwich</h3>
      <img
        src="https://www.cooking-therapy.com/wp-content/uploads/2021/09/Roasted-Squash-Grilled-Cheese-4-2.jpg"
        alt="Grilled Cheese Sandwich"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 slices of bread</li>
          <li>2 slices of cheese (e.g., cheddar, American)</li>
          <li>2 tablespoons butter</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Place a slice of cheese between two
            slices of bread to form a sandwich.
          </li>
          <li>
            <strong>Step 2:</strong> Heat a skillet or griddle over medium-low
            heat.
          </li>
          <li>
            <strong>Step 3:</strong> Melt 1 tablespoon of butter in the skillet
            or on the griddle.
          </li>
          <li>
            <strong>Step 4:</strong> Place the sandwich in the skillet and cook
            until the bread is golden brown and crispy.
          </li>
          <li>
            <strong>Step 5:</strong> Flip the sandwich, adding the remaining
            tablespoon of butter to the skillet if needed.
          </li>
          <li>
            <strong>Step 6:</strong> Cook until the second side is golden brown
            and the cheese is melted.
          </li>
          <li>
            <strong>Step 7:</strong> Remove from heat, slice, and serve the
            Grilled Cheese sandwich hot.
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

export default GrilledCheeseSandwichRecipeComponent;
