import React, { useState, useEffect } from "react";
import axios from "axios";

const IndianButterChickenRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Indian Butter Chicken</h3>
      <img
        src="https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Indian-butter-chicken-1.jpg"
        alt="Indian Butter Chicken"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>
            1.5 lbs boneless, skinless chicken thighs, cut into bite-sized
            pieces
          </li>
          <li>1 cup plain yogurt</li>
          <li>2 tablespoons lemon juice</li>
          <li>2 teaspoons ground turmeric</li>
          <li>2 teaspoons garam masala</li>
          <li>2 teaspoons ground cumin</li>
          <li>2 teaspoons chili powder</li>
          <li>2 teaspoons paprika</li>
          <li>1 teaspoon ground cinnamon</li>
          <li>1 teaspoon ground coriander</li>
          <li>4 cloves garlic, minced</li>
          <li>2 tablespoons grated fresh ginger</li>
          <li>1 cup tomato puree</li>
          <li>1 cup heavy cream</li>
          <li>1/4 cup unsalted butter</li>
          <li>Salt and pepper to taste</li>
          <li>Chopped fresh cilantro for garnish</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large bowl, combine yogurt, lemon
            juice, turmeric, garam masala, cumin, chili powder, paprika,
            cinnamon, coriander, garlic, and ginger. Mix well. Add chicken
            pieces and marinate for at least 1 hour, preferably overnight in the
            refrigerator.
          </li>
          <li>
            <strong>Step 2:</strong> Heat butter in a large skillet over medium
            heat. Add marinated chicken and cook until browned and cooked
            through, about 10 minutes.
          </li>
          <li>
            <strong>Step 3:</strong> Stir in tomato puree and simmer for 10
            minutes. Add cream and simmer for an additional 10 minutes. Season
            with salt and pepper to taste.
          </li>
          <li>
            <strong>Step 4:</strong> Serve hot, garnished with chopped fresh
            cilantro. Serve with rice or naan bread.
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

export default IndianButterChickenRecipeComponent;
