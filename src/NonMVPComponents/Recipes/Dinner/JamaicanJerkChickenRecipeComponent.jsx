import React, { useState, useEffect } from "react";
import axios from "axios";

const JamaicanJerkChickenRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Jamaican Jerk Chicken</h3>
      <img
        src="https://disheswithdad.com/wp-content/uploads/2021/05/jerk-chicken-12.jpg"
        alt="Jamaican Jerk Chicken"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>4 boneless, skinless chicken breasts</li>
          <li>4 tablespoons Jamaican jerk seasoning</li>
          <li>2 tablespoons olive oil</li>
          <li>2 tablespoons soy sauce</li>
          <li>2 tablespoons lime juice</li>
          <li>2 cloves garlic, minced</li>
          <li>1 teaspoon brown sugar</li>
          <li>1 teaspoon thyme leaves</li>
          <li>Salt and pepper to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a bowl, combine Jamaican jerk seasoning,
            olive oil, soy sauce, lime juice, minced garlic, brown sugar, thyme
            leaves, salt, and pepper to make the marinade.
          </li>
          <li>
            <strong>Step 2:</strong> Place chicken breasts in a resealable bag
            or dish and pour the marinade over them. Seal or cover and marinate
            in the refrigerator for at least 2 hours or overnight.
          </li>
          <li>
            <strong>Step 3:</strong> Preheat grill to medium-high heat and oil
            the grates.
          </li>
          <li>
            <strong>Step 4:</strong> Remove chicken from the marinade and grill
            for 6-8 minutes per side or until fully cooked and charred.
          </li>
          <li>
            <strong>Step 5:</strong> Serve hot with your favorite sides, such as
            rice and peas, and garnish with lime wedges and fresh cilantro.
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

export default JamaicanJerkChickenRecipeComponent;
