import React, { useState, useEffect } from "react";
import axios from "axios";

const TresLechesCakeRecipeComponent = ({
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
            Tres Leches Cake
          </h3>
          <img
            src="https://www.allrecipes.com/thmb/KfnfyrWfrla-34afSAfDJQ60P1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tres-leches-71431848db22469f85cd054e2f26a272.jpg"
            alt="Tres Leches Cake"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 cup all-purpose flour</li>
            <li className="mb-4">1 1/2 teaspoons baking powder</li>
            <li className="mb-4">1/2 cup unsalted butter, softened</li>
            <li className="mb-4">1 cup granulated sugar</li>
            <li className="mb-4">5 large eggs</li>
            <li className="mb-4">1 teaspoon vanilla extract</li>
            <li className="mb-4">1 1/2 cups whole milk</li>
            <li className="mb-4">1 (14-ounce) can sweetened condensed milk</li>
            <li className="mb-4">1 (12-ounce) can evaporated milk</li>
            <li className="mb-4">1 cup heavy cream</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            350°F (175°C). Grease and flour a 9x13-inch baking dish.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a medium mixing
            bowl, whisk together the flour and baking powder. Set aside.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> In a large mixing bowl,
            cream together the softened butter and granulated sugar until light
            and fluffy.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Add the eggs one at a
            time, beating well with each addition. Stir in the vanilla extract.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Gradually add the flour
            mixture to the wet ingredients, mixing until just combined.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Pour the batter into
            the prepared baking dish and spread it out evenly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Bake in the preheated
            oven for 30-35 minutes or until a toothpick inserted into the center
            comes out clean.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> While the cake is still
            warm, poke holes all over the surface using a fork or skewer.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 9:</strong> In a mixing bowl,
            combine the whole milk, sweetened condensed milk, and evaporated
            milk. Pour this mixture evenly over the warm cake.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 10:</strong> Let the cake cool to
            room temperature, then refrigerate for at least 4 hours or overnight
            to allow the cake to absorb the milk mixture.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 11:</strong> Before serving, whip
            the heavy cream until stiff peaks form, and spread it over the cake.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 12:</strong> Serve chilled and
            enjoy your Tres Leches Cake!
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

export default TresLechesCakeRecipeComponent;
