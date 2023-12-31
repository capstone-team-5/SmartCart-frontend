import React, { useState, useEffect } from "react";
import axios from "axios";

const SpicedCreamOfWheatPorridgeRecipeComponent = ({
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
            Spiced Cream of Wheat Porridge
          </h3>
          <img
            src="data:image/jpeg;base64,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"
            alt="spiced cream of wheat porridge"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1/2 cup cream of wheat</li>
            <li className="mb-4">2 cups milk</li>
            <li className="mb-4">2 tablespoons sugar</li>
            <li className="mb-4">1/4 teaspoon ground cinnamon</li>
            <li className="mb-4">1/4 teaspoon ground nutmeg</li>
            <li className="mb-4">1/4 teaspoon vanilla extract</li>
            <li className="mb-4">1/4 cup raisins</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a saucepan, bring
            the milk to a boil.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Gradually whisk in the
            cream of wheat, sugar, ground cinnamon, and ground nutmeg.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Reduce heat to low and
            simmer, stirring constantly, until the porridge thickens, about 5-7
            minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Remove from heat and
            stir in the vanilla extract and raisins.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Serve the spiced cream
            of wheat porridge hot.
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

export default SpicedCreamOfWheatPorridgeRecipeComponent;
