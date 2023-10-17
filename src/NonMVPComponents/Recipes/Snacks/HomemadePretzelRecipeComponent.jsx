import React, { useState, useEffect } from "react";
import axios from "axios";

const HomemadePretzelRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Homemade Pretzel</h3>
      <img
        src="https://handletheheat.com/wp-content/uploads/2021/09/soft-pretzel-recipe-SQUARE-500x375.jpg"
        alt="Homemade Pretzel"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 1/2 cups warm water</li>
          <li>1 packet (2 1/4 teaspoons) active dry yeast</li>
          <li>1 teaspoon salt</li>
          <li>1 tablespoon granulated sugar</li>
          <li>4 cups all-purpose flour</li>
          <li>Coarse sea salt for topping</li>
          <li>10 cups water</li>
          <li>2/3 cup baking soda</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a mixing bowl, combine warm water and
            yeast. Let it sit for 5 minutes until frothy.
          </li>
          <li>
            <strong>Step 2:</strong> Add salt, sugar, and flour to the yeast
            mixture. Mix until a dough forms.
          </li>
          <li>
            <strong>Step 3:</strong> Knead the dough for about 5 minutes until
            smooth and elastic. Place in a greased bowl, cover, and let it rise
            for 30 minutes.
          </li>
          <li>
            <strong>Step 4:</strong> Preheat your oven to 450°F (230°C). Bring
            10 cups of water and baking soda to a boil in a large pot.
          </li>
          <li>
            <strong>Step 5:</strong> Divide the dough into small pieces and roll
            each piece into a rope. Shape them into pretzels.
          </li>
          <li>
            <strong>Step 6:</strong> Boil each pretzel in the baking soda water
            for about 30 seconds, then place them on a baking sheet.
          </li>
          <li>
            <strong>Step 7:</strong> Sprinkle with coarse sea salt and bake in
            the preheated oven for 12-15 minutes or until golden brown.
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

export default HomemadePretzelRecipeComponent;
