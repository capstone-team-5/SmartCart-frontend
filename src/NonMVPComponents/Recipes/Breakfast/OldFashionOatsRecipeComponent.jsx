import React, { useState, useEffect } from "react";
import axios from "axios";

const OldFashionOatsRecipeComponent = ({
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
            Old Fashion Oats with Raspberries and Peaches
          </h3>
          <img
            src="https://www.eatingwell.com/thmb/-UULlbERQCfJRQTnb5bwjoo9-UQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-hero-05-060861b81cb641cea272e068aba093fd.jpg"
            alt="Old Fashion Oats with Raspberries and Peaches"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 cup old-fashioned oats</li>
            <li className="mb-4">2 cups milk (or non-dairy milk)</li>
            <li className="mb-4">2 tablespoons honey (or maple syrup)</li>
            <li className="mb-4">1/2 teaspoon vanilla extract</li>
            <li className="mb-4">1 cup fresh raspberries</li>
            <li className="mb-4">1 cup fresh peaches, diced</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a saucepan, combine
            the old-fashioned oats and milk. Cook over medium heat, stirring
            occasionally, until the oats are tender and the mixture has
            thickened, about 5-7 minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Stir in the honey (or
            maple syrup) and vanilla extract.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Remove from heat and
            let it cool slightly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Divide the oat mixture
            into serving bowls.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Top with sliced
            raspberries and diced peaches.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Serve Old Fashion Oats
            with Raspberries and Peaches warm.
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

export default OldFashionOatsRecipeComponent;
