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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Chocolate Chip Cookies</h3>
      <img
        src="https://www.modernhoney.com/wp-content/uploads/2019/01/The-Best-Chocolate-Chip-Cookies-2-500x500.jpg"
        alt="Chocolate Chip Cookies"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup (2 sticks) unsalted butter, softened</li>
          <li>3/4 cup granulated sugar</li>
          <li>3/4 cup packed brown sugar</li>
          <li>1 teaspoon vanilla extract</li>
          <li>2 large eggs</li>
          <li>2 1/4 cups all-purpose flour</li>
          <li>1 teaspoon baking soda</li>
          <li>1/2 teaspoon salt</li>
          <li>2 cups semisweet chocolate chips</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Preheat your oven to 375°F (190°C).
          </li>
          <li>
            <strong>Step 2:</strong> In a large mixing bowl, cream together the
            softened butter, granulated sugar, brown sugar, and vanilla extract
            until smooth.
          </li>
          <li>
            <strong>Step 3:</strong> Add the eggs one at a time, beating well
            after each addition.
          </li>
          <li>
            <strong>Step 4:</strong> In a separate bowl, whisk together the
            all-purpose flour, baking soda, and salt. Gradually add the dry
            ingredients to the wet ingredients and mix until just combined.
          </li>
          <li>
            <strong>Step 5:</strong> Stir in the semisweet chocolate chips.
          </li>
          <li>
            <strong>Step 6:</strong> Drop rounded tablespoons of cookie dough
            onto ungreased baking sheets.
          </li>
          <li>
            <strong>Step 7:</strong> Bake in the preheated oven for 9-11 minutes
            or until the edges are golden but the centers are still soft.
          </li>
          <li>
            <strong>Step 8:</strong> Remove from the oven and let the cookies
            cool on the baking sheets for a few minutes before transferring them
            to wire racks to cool completely.
          </li>
          <li>
            <strong>Step 9:</strong> Enjoy your homemade Chocolate Chip Cookies!
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

export default ChocolateChipCookiesRecipeComponent;
