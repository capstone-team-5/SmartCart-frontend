import React, { useState, useEffect } from "react";
import axios from "axios";

const SpicyChickenSandwichRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Spicy Chicken Sandwich</h3>
      <img
        src="https://mccormick.widen.net/content/u0bnjmyzzw/jpeg/redhot_spicy_chicken_sandwich38649%20copy.jpg?crop=true&anchor=476,0&q=80&color=ffffffff&u=eelhgb&w=1365&h=1365"
        alt="Spicy Chicken Sandwich"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 boneless, skinless chicken breast</li>
          <li>2 tablespoons hot sauce (adjust to taste)</li>
          <li>1/4 cup buttermilk</li>
          <li>1/2 cup all-purpose flour</li>
          <li>1/2 teaspoon paprika</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>1/4 teaspoon cayenne pepper</li>
          <li>Salt and pepper to taste</li>
          <li>2 hamburger buns</li>
          <li>Lettuce, tomato, and mayonnaise for topping (optional)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a bowl, mix hot sauce and buttermilk.
            Add the chicken breast and let it marinate for at least 30 minutes.
          </li>
          <li>
            <strong>Step 2:</strong> In a separate bowl, combine flour,
            paprika, garlic powder, cayenne pepper, salt, and pepper.
          </li>
          <li>
            <strong>Step 3:</strong> Remove the chicken from the marinade and
            dredge it in the flour mixture until fully coated.
          </li>
          <li>
            <strong>Step 4:</strong> Heat oil in a pan over medium-high heat.
            Fry the chicken until golden brown and cooked through, about 5-7
            minutes per side.
          </li>
          <li>
            <strong>Step 5:</strong> Remove the chicken from the pan and drain
            on paper towels.
          </li>
          <li>
            <strong>Step 6:</strong> Toast the hamburger buns.
          </li>
          <li>
            <strong>Step 7:</strong> Assemble the sandwich by placing the fried
            chicken on the buns. Add lettuce, tomato, and mayonnaise if desired.
          </li>
          <li>
            <strong>Step 8:</strong> Serve the Spicy Chicken Sandwich hot.
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

export default SpicyChickenSandwichRecipeComponent;
