import React, { useState, useEffect } from "react";
import axios from "axios";

const KetoChocolateCroissantsRecipeComponent = ({
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
            Keto Chocolate Croissants
          </h3>
          <img
            src="https://www.wholesomeyum.com/wp-content/uploads/2021/04/wholesomeyum-keto-croissant-recipe-chocolate-filling-22-500x500.jpg"
            alt="keto chocolate croissants"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 cups almond flour</li>
            <li className="mb-4">2 tablespoons powdered erythritol</li>
            <li className="mb-4">1 teaspoon baking powder</li>
            <li className="mb-4">1/4 teaspoon salt</li>
            <li className="mb-4">2 large eggs</li>
            <li className="mb-4">4 tablespoons melted butter</li>
            <li className="mb-4">1/2 teaspoon vanilla extract</li>
            <li className="mb-4">
              2 ounces dark chocolate (85% cocoa or higher), chopped
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a large bowl, whisk
            together the almond flour, powdered erythritol, baking powder, and
            salt.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In another bowl, whisk
            together the eggs, melted butter, and vanilla extract.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Pour the wet
            ingredients into the dry ingredients and stir until a dough forms.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Divide the dough into 4
            equal portions and shape each portion into a rectangle.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Place chopped dark
            chocolate on each rectangle and roll it up like a croissant.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Place the croissants on
            a baking sheet and bake in a preheated oven at 350°F (175°C) for
            15-20 minutes or until golden brown.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Let the croissants cool
            slightly before serving.
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

export default KetoChocolateCroissantsRecipeComponent;
