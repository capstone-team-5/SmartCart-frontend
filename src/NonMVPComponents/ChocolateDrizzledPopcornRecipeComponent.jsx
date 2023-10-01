import React, { useState, useEffect } from "react";
import axios from "axios";

const ChocolateDrizzledPopcornRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Chocolate Drizzled Popcorn</h3>
      <img
        src="https://www.thechunkychef.com/wp-content/uploads/2020/01/Chocolate-Covered-Popcorn-gift.jpg"
        alt="Chocolate Drizzled Popcorn"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>10 cups popped popcorn</li>
          <li>1 cup semisweet chocolate chips</li>
          <li>1/4 cup white chocolate chips (optional)</li>
          <li>1 tablespoon vegetable oil</li>
          <li>Salt to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Line a baking sheet with parchment paper and spread the popped popcorn evenly on it.
          </li>
          <li>
            <strong>Step 2:</strong> In a microwave-safe bowl, melt the semisweet chocolate chips and white chocolate chips (if using) with vegetable oil in 30-second intervals, stirring each time, until smooth.
          </li>
          <li>
            <strong>Step 3:</strong> Drizzle the melted chocolate over the popcorn and immediately sprinkle with a pinch of salt.
          </li>
          <li>
            <strong>Step 4:</strong> Let the chocolate drizzle cool and harden, which may take about 30 minutes at room temperature.
          </li>
          <li>
            <strong>Step 5:</strong> Once the chocolate is set, break the popcorn into clusters and enjoy your Chocolate Drizzled Popcorn!
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

export default ChocolateDrizzledPopcornRecipeComponent;
