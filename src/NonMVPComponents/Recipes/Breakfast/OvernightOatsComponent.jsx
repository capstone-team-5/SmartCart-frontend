import React, { useState, useEffect } from "react";
import axios from "axios";

const OvernightOatsRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Overnight Oats</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-p2YyUxUxX6IYTDLn-HUYPZklphkU6W1oQg&usqp=CAU"
        alt="overnight oats"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1/2 cup rolled oats</li>
          <li>1/2 cup milk (any type)</li>
          <li>1/2 cup yogurt (Greek yogurt works well)</li>
          <li>1 tablespoon honey or maple syrup</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>1/4 cup fresh berries (e.g., strawberries, blueberries)</li>
          <li>1 tablespoon chopped nuts (e.g., almonds, walnuts)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a mason jar or container, combine the
            rolled oats, milk, yogurt, honey or maple syrup, and vanilla
            extract.
          </li>
          <li>
            <strong>Step 2:</strong> Stir well, cover, and refrigerate
            overnight, or for at least 4 hours.
          </li>
          <li>
            <strong>Step 3:</strong> In the morning, give the oats a good stir.
            Top with fresh berries and chopped nuts before serving.
          </li>
          <li>
            <strong>Step 4:</strong> Enjoy your delicious and nutritious
            overnight oats!
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

export default OvernightOatsRecipeComponent;
