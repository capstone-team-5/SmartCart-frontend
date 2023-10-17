import React, { useState, useEffect } from "react";
import axios from "axios";

const ChocolateChipCookiesRecipeComponent = ({
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
            Chocolate Chip Cookies
          </h3>
          <img
            src="https://www.modernhoney.com/wp-content/uploads/2019/01/The-Best-Chocolate-Chip-Cookies-2-500x500.jpg"
            alt="Chocolate Chip Cookies"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 cup (2 sticks) unsalted butter, softened</li>
            <li className="mb-4">3/4 cup granulated sugar</li>
            <li className="mb-4">3/4 cup packed brown sugar</li>
            <li className="mb-4">1 teaspoon vanilla extract</li>
            <li className="mb-4">2 large eggs</li>
            <li className="mb-4">2 1/4 cups all-purpose flour</li>
            <li className="mb-4">1 teaspoon baking soda</li>
            <li className="mb-4">1/2 teaspoon salt</li>
            <li className="mb-4">2 cups semisweet chocolate chips</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            375°F (190°C).
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a large mixing bowl,
            cream together the softened butter, granulated sugar, brown sugar,
            and vanilla extract until smooth.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Add the eggs one at a
            time, beating well after each addition.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> In a separate bowl,
            whisk together the all-purpose flour, baking soda, and salt.
            Gradually add the dry ingredients to the wet ingredients and mix
            until just combined.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Stir in the semisweet
            chocolate chips.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Drop rounded
            tablespoons of cookie dough onto ungreased baking sheets.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Bake in the preheated
            oven for 9-11 minutes or until the edges are golden but the centers
            are still soft.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Remove from the oven
            and let the cookies cool on the baking sheets for a few minutes
            before transferring them to wire racks to cool completely.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 9:</strong> Enjoy your homemade
            Chocolate Chip Cookies!
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

export default ChocolateChipCookiesRecipeComponent;
