import React, { useState, useEffect } from "react";
import axios from "axios";

const CoconutChipsRecipeComponent = ({
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
            Coconut Chips
          </h3>
          <img
            src="https://www.alphafoodie.com/wp-content/uploads/2020/09/Coconut-Chips-1-of-1.jpeg"
            alt="Coconut Chips"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 cups unsweetened coconut flakes</li>
            <li className="mb-4">2 tablespoons maple syrup</li>
            <li className="mb-4">1/2 teaspoon vanilla extract</li>
            <li className="mb-4">1/4 teaspoon salt</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            325°F (160°C). Line a baking sheet with parchment paper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a bowl, combine the
            coconut flakes, maple syrup, vanilla extract, and salt. Mix until
            the coconut is evenly coated.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Spread the coated
            coconut flakes in an even layer on the prepared baking sheet.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Bake in the preheated
            oven for 10-15 minutes, stirring every 5 minutes, until the coconut
            chips are golden brown and toasted.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Remove from the oven
            and let them cool completely on the baking sheet.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Once cooled, your
            Coconut Chips are ready to enjoy as a snack or topping for various
            dishes.
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

export default CoconutChipsRecipeComponent;
