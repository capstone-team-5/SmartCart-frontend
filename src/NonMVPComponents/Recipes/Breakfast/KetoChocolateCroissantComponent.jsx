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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Keto Chocolate Croissants</h3>
      <img
        src="https://www.wholesomeyum.com/wp-content/uploads/2021/04/wholesomeyum-keto-croissant-recipe-chocolate-filling-22-500x500.jpg"
        alt="keto chocolate croissants"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 cups almond flour</li>
          <li>2 tablespoons powdered erythritol</li>
          <li>1 teaspoon baking powder</li>
          <li>1/4 teaspoon salt</li>
          <li>2 large eggs</li>
          <li>4 tablespoons melted butter</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>2 ounces dark chocolate (85% cocoa or higher), chopped</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large bowl, whisk together the almond
            flour, powdered erythritol, baking powder, and salt.
          </li>
          <li>
            <strong>Step 2:</strong> In another bowl, whisk together the eggs,
            melted butter, and vanilla extract.
          </li>
          <li>
            <strong>Step 3:</strong> Pour the wet ingredients into the dry
            ingredients and stir until a dough forms.
          </li>
          <li>
            <strong>Step 4:</strong> Divide the dough into 4 equal portions and
            shape each portion into a rectangle.
          </li>
          <li>
            <strong>Step 5:</strong> Place chopped dark chocolate on each
            rectangle and roll it up like a croissant.
          </li>
          <li>
            <strong>Step 6:</strong> Place the croissants on a baking sheet and
            bake in a preheated oven at 350°F (175°C) for 15-20 minutes or until
            golden brown.
          </li>
          <li>
            <strong>Step 7:</strong> Let the croissants cool slightly before
            serving.
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

export default KetoChocolateCroissantsRecipeComponent;