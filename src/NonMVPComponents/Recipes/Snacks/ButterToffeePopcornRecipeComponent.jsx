import React, { useState, useEffect } from "react";
import axios from "axios";

const ButterToffeePopcornRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Butter Toffee Popcorn</h3>
      <img
        src="https://res.cloudinary.com/hksqkdlah/image/upload/8913_sfs-crackerjackpopcorn-006-275830.jpg"
        alt="Butter Toffee Popcorn"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>10 cups popped popcorn</li>
          <li>1 cup unsalted butter</li>
          <li>2 cups brown sugar</li>
          <li>1/2 cup light corn syrup</li>
          <li>1/2 teaspoon salt</li>
          <li>1/2 teaspoon baking soda</li>
          <li>1 teaspoon vanilla extract</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Preheat your oven to 250°F (120°C). Place
            the popped popcorn in a large mixing bowl.
          </li>
          <li>
            <strong>Step 2:</strong> In a medium saucepan over medium heat, melt
            the butter. Stir in the brown sugar, corn syrup, and salt. Bring the
            mixture to a boil, stirring constantly.
          </li>
          <li>
            <strong>Step 3:</strong> Once the mixture is boiling, stop stirring
            and let it boil for 4-5 minutes without stirring. Remove from heat.
          </li>
          <li>
            <strong>Step 4:</strong> Stir in the baking soda and vanilla extract
            until well combined.
          </li>
          <li>
            <strong>Step 5:</strong> Pour the toffee mixture over the popped
            popcorn and gently toss to coat the popcorn evenly.
          </li>
          <li>
            <strong>Step 6:</strong> Spread the coated popcorn onto a baking
            sheet lined with parchment paper.
          </li>
          <li>
            <strong>Step 7:</strong> Bake in the preheated oven for 45 minutes,
            stirring every 15 minutes.
          </li>
          <li>
            <strong>Step 8:</strong> Remove from the oven and let it cool
            completely. Once cooled, break into pieces and enjoy your butter
            toffee popcorn!
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

export default ButterToffeePopcornRecipeComponent;
