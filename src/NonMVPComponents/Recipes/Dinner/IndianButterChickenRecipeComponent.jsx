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
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow-md rounded-lg">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-2xl font-extrabold mb-8 text-center">
            Indian Butter Chicken
          </h3>
          <img
            src="https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Indian-butter-chicken-1.jpg"
            alt="Indian Butter Chicken"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">
              1.5 lbs boneless, skinless chicken thighs, cut into bite-sized
              pieces
            </li>
            <li className="mb-4">1 cup plain yogurt</li>
            <li className="mb-4">2 tablespoons lemon juice</li>
            <li className="mb-4">2 teaspoons ground turmeric</li>
            <li className="mb-4">2 teaspoons garam masala</li>
            <li className="mb-4">2 teaspoons ground cumin</li>
            <li className="mb-4">2 teaspoons chili powder</li>
            <li className="mb-4">2 teaspoons paprika</li>
            <li className="mb-4">1 teaspoon ground cinnamon</li>
            <li className="mb-4">1 teaspoon ground coriander</li>
            <li className="mb-4">4 cloves garlic, minced</li>
            <li className="mb-4">2 tablespoons grated fresh ginger</li>
            <li className="mb-4">1 cup tomato puree</li>
            <li className="mb-4">1 cup heavy cream</li>
            <li className="mb-4">1/4 cup unsalted butter</li>
            <li className="mb-4">Salt and pepper to taste</li>
            <li className="mb-4">Chopped fresh cilantro for garnish</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a large bowl,
            combine yogurt, lemon juice, turmeric, garam masala, cumin, chili
            powder, paprika, cinnamon, coriander, garlic, and ginger. Mix well.
            Add chicken pieces and marinate for at least 1 hour, preferably
            overnight in the refrigerator.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Heat butter in a large
            skillet over medium heat. Add marinated chicken and cook until
            browned and cooked through, about 10 minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Stir in tomato puree
            and simmer for 10 minutes. Add cream and simmer for an additional 10
            minutes. Season with salt and pepper to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Serve hot, garnished
            with chopped fresh cilantro. Serve with rice or naan bread.
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

export default IndianButterChickenRecipeComponent;
