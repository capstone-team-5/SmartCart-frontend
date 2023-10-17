import React, { useState, useEffect } from "react";
import axios from "axios";

const StrawberryCheesecakeRecipeComponent = ({
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
            Strawberry Cheesecake
          </h3>
          <img
            src="https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg"
            alt="Strawberry Cheesecake"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 1/2 cups graham cracker crumbs</li>
            <li className="mb-4">1/4 cup granulated sugar</li>
            <li className="mb-4">1/2 cup unsalted butter, melted</li>
            <li className="mb-4">
              4 (8-ounce) packages cream cheese, softened
            </li>
            <li className="mb-4">1 cup granulated sugar</li>
            <li className="mb-4">1 teaspoon vanilla extract</li>
            <li className="mb-4">4 large eggs</li>
            <li className="mb-4">2 cups fresh strawberries, chopped</li>
            <li className="mb-4">1/4 cup all-purpose flour</li>
            <li className="mb-4">1/4 cup powdered sugar</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            325°F (160°C). Grease and line the bottom of a 9-inch springform pan
            with parchment paper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a medium bowl,
            combine graham cracker crumbs, 1/4 cup granulated sugar, and melted
            butter. Press the mixture into the bottom of the prepared pan.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> In a blender or food
            processor, blend the strawberries until smooth. Add 1/4 cup
            all-purpose flour to the strawberry puree and mix until well
            combined. Set aside.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> In a large mixing bowl,
            beat cream cheese, 1 cup granulated sugar, and vanilla extract until
            smooth. Add eggs, one at a time, mixing well after each addition.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Pour half of the cream
            cheese mixture over the crust in the pan. Spoon half of the
            strawberry mixture over the cream cheese layer. Repeat with the
            remaining cream cheese and strawberry mixtures.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Use a knife to gently
            swirl the strawberry mixture into the cream cheese mixture to create
            a marbled effect.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Bake in the preheated
            oven for 45-50 minutes or until the center is set. Turn off the oven
            and leave the cheesecake inside for 1 hour.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Remove the cheesecake
            from the oven and refrigerate for at least 4 hours or until
            completely chilled.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 9:</strong> Before serving, dust
            the top with powdered sugar and garnish with fresh strawberries if
            desired.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 10:</strong> Enjoy your homemade
            Strawberry Cheesecake!
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

export default StrawberryCheesecakeRecipeComponent;
