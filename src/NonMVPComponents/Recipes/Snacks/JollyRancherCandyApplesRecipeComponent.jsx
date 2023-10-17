import React, { useState, useEffect } from "react";
import axios from "axios";

const JollyRancherCandyApplesRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">
        Jolly Rancher Candy Apples
      </h3>
      <img
        src="https://publish-p50513-e440257.adobeaemcloud.com/content/dam/hersheyland/en-us/recipes/recipe-images/275-jolly-rancher-candy-apple.jpg"
        alt="Jolly Rancher Candy Apples"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>6 apples (preferably Granny Smith)</li>
          <li>2 cups Jolly Rancher candies (assorted colors)</li>
          <li>1/2 cup water</li>
          <li>6 wooden sticks</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Wash and dry the apples thoroughly. Insert
            a wooden stick into the top of each apple.
          </li>
          <li>
            <strong>Step 2:</strong> Unwrap the Jolly Rancher candies and place
            them in a microwave-safe bowl. Add water to the bowl.
          </li>
          <li>
            <strong>Step 3:</strong> Microwave the candies and water in
            30-second intervals, stirring each time, until the candies are
            completely melted and smooth.
          </li>
          <li>
            <strong>Step 4:</strong> Quickly dip each apple into the melted
            candy, coating it evenly. Allow any excess candy to drip off.
          </li>
          <li>
            <strong>Step 5:</strong> Place the coated apples on a parchment
            paper-lined tray to cool and harden.
          </li>
          <li>
            <strong>Step 6:</strong> Once the candy coating is set, your Jolly
            Rancher Candy Apples are ready to enjoy!
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

export default JollyRancherCandyApplesRecipeComponent;
