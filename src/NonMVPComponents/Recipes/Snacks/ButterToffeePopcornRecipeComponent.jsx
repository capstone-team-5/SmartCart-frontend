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
    <div className="bg-white dark:bg-gray-800 dark:text-white p-4 shadow-md rounded-lg">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-2xl font-extrabold mb-8 text-center">
            Butter Toffee Popcorn
          </h3>
          <img
            src="https://res.cloudinary.com/hksqkdlah/image/upload/8913_sfs-crackerjackpopcorn-006-275830.jpg"
            alt="Butter Toffee Popcorn"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">10 cups popped popcorn</li>
            <li className="mb-4">1 cup unsalted butter</li>
            <li className="mb-4">2 cups brown sugar</li>
            <li className="mb-4">1/2 cup light corn syrup</li>
            <li className="mb-4">1/2 teaspoon salt</li>
            <li className="mb-4">1/2 teaspoon baking soda</li>
            <li className="mb-4">1 teaspoon vanilla extract</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            250°F (120°C). Place the popped popcorn in a large mixing bowl.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a medium saucepan
            over medium heat, melt the butter. Stir in the brown sugar, corn
            syrup, and salt. Bring the mixture to a boil, stirring constantly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Once the mixture is
            boiling, stop stirring and let it boil for 4-5 minutes without
            stirring. Remove from heat.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Stir in the baking soda
            and vanilla extract until well combined.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Pour the toffee mixture
            over the popped popcorn and gently toss to coat the popcorn evenly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Spread the coated
            popcorn onto a baking sheet lined with parchment paper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Bake in the preheated
            oven for 45 minutes, stirring every 15 minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Remove from the oven
            and let it cool completely. Once cooled, break into pieces and enjoy
            your butter toffee popcorn!
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

export default ButterToffeePopcornRecipeComponent;
