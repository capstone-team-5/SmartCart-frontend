import React, { useState, useEffect } from "react";
import axios from "axios";

const CoconutChipsRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Coconut Chips</h3>
      <img
        src="https://www.alphafoodie.com/wp-content/uploads/2020/09/Coconut-Chips-1-of-1.jpeg"
        alt="Coconut Chips"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 cups unsweetened coconut flakes</li>
          <li>2 tablespoons maple syrup</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>1/4 teaspoon salt</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Preheat your oven to 325°F (160°C). Line a baking sheet with parchment paper.
          </li>
          <li>
            <strong>Step 2:</strong> In a bowl, combine the coconut flakes, maple syrup, vanilla extract, and salt. Mix until the coconut is evenly coated.
          </li>
          <li>
            <strong>Step 3:</strong> Spread the coated coconut flakes in an even layer on the prepared baking sheet.
          </li>
          <li>
            <strong>Step 4:</strong> Bake in the preheated oven for 10-15 minutes, stirring every 5 minutes, until the coconut chips are golden brown and toasted.
          </li>
          <li>
            <strong>Step 5:</strong> Remove from the oven and let them cool completely on the baking sheet.
          </li>
          <li>
            <strong>Step 6:</strong> Once cooled, your Coconut Chips are ready to enjoy as a snack or topping for various dishes.
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

export default CoconutChipsRecipeComponent;
