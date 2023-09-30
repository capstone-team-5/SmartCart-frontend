import React, { useState, useEffect } from "react";
import axios from "axios";

const GingerGarlicSalmonRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Ginger Garlic Salmon</h3>
      <img
        src="https://rasamalaysia.com/wp-content/uploads/2015/02/ginger_garlic_baked_salmon_thumb.jpg"
        alt="Ginger Garlic Salmon"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>4 salmon fillets</li>
          <li>3 cloves garlic, minced</li>
          <li>1 tablespoon grated ginger</li>
          <li>2 tablespoons soy sauce</li>
          <li>2 tablespoons honey</li>
          <li>1 tablespoon olive oil</li>
          <li>1 teaspoon sesame oil</li>
          <li>1/2 teaspoon red pepper flakes (optional)</li>
          <li>Salt and black pepper to taste</li>
          <li>Fresh cilantro leaves for garnish</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a small bowl, whisk together minced
            garlic, grated ginger, soy sauce, honey, olive oil, sesame oil, red
            pepper flakes (if using), salt, and black pepper.
          </li>
          <li>
            <strong>Step 2:</strong> Place salmon fillets in a shallow dish and
            pour the marinade over them. Let them marinate for 15-30 minutes in
            the refrigerator.
          </li>
          <li>
            <strong>Step 3:</strong> Preheat the grill or grill pan over medium
            heat. Lightly oil the grill grates.
          </li>
          <li>
            <strong>Step 4:</strong> Remove salmon from the marinade and grill
            for about 4-5 minutes per side, or until the salmon flakes easily
            with a fork and has grill marks.
          </li>
          <li>
            <strong>Step 5:</strong> Garnish with fresh cilantro leaves and
            serve hot.
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

export default GingerGarlicSalmonRecipeComponent;
