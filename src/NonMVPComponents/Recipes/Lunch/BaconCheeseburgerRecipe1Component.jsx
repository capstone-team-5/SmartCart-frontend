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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Bacon Cheeseburger</h3>
      <img
        src="https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg"
        alt="Bacon Cheeseburger"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1/2 lb ground beef</li>
          <li>2 slices of bacon</li>
          <li>2 slices of cheddar cheese</li>
          <li>2 hamburger buns</li>
          <li>Lettuce leaves</li>
          <li>Sliced tomato</li>
          <li>Sliced red onion</li>
          <li>Ketchup and mustard</li>
          <li>Salt and pepper to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Cook bacon in a skillet until crispy.
            Remove and drain on paper towels.
          </li>
          <li>
            <strong>Step 2:</strong> In the same skillet, cook ground beef over
            medium-high heat until browned. Season with salt and pepper.
          </li>
          <li>
            <strong>Step 3:</strong> Place cheddar cheese slices on top of the
            beef patties to melt.
          </li>
          <li>
            <strong>Step 4:</strong> Toast hamburger buns in the skillet or on
            the grill.
          </li>
          <li>
            <strong>Step 5:</strong> Assemble the burgers by placing lettuce
            leaves, a beef patty with melted cheese, bacon slices, sliced
            tomato, and red onion on the bun.
          </li>
          <li>
            <strong>Step 6:</strong> Add ketchup and mustard to taste.
          </li>
          <li>
            <strong>Step 7:</strong> Top with the other bun half and serve the
            Bacon Cheeseburger immediately.
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

export default BaconCheeseburgerRecipe1Component;
