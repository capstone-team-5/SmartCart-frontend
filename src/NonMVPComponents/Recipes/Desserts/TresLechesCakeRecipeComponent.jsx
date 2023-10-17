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
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">Tres Leches Cake</h3>
      <img
        src="https://www.allrecipes.com/thmb/KfnfyrWfrla-34afSAfDJQ60P1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tres-leches-71431848db22469f85cd054e2f26a272.jpg"
        alt="Tres Leches Cake"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup all-purpose flour</li>
          <li>1 1/2 teaspoons baking powder</li>
          <li>1/2 cup unsalted butter, softened</li>
          <li>1 cup granulated sugar</li>
          <li>5 large eggs</li>
          <li>1 teaspoon vanilla extract</li>
          <li>1 1/2 cups whole milk</li>
          <li>1 (14-ounce) can sweetened condensed milk</li>
          <li>1 (12-ounce) can evaporated milk</li>
          <li>1 cup heavy cream</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Preheat your oven to 350°F (175°C). Grease
            and flour a 9x13-inch baking dish.
          </li>
          <li>
            <strong>Step 2:</strong> In a medium mixing bowl, whisk together the
            flour and baking powder. Set aside.
          </li>
          <li>
            <strong>Step 3:</strong> In a large mixing bowl, cream together the
            softened butter and granulated sugar until light and fluffy.
          </li>
          <li>
            <strong>Step 4:</strong> Add the eggs one at a time, beating well
            with each addition. Stir in the vanilla extract.
          </li>
          <li>
            <strong>Step 5:</strong> Gradually add the flour mixture to the wet
            ingredients, mixing until just combined.
          </li>
          <li>
            <strong>Step 6:</strong> Pour the batter into the prepared baking
            dish and spread it out evenly.
          </li>
          <li>
            <strong>Step 7:</strong> Bake in the preheated oven for 30-35
            minutes or until a toothpick inserted into the center comes out
            clean.
          </li>
          <li>
            <strong>Step 8:</strong> While the cake is still warm, poke holes
            all over the surface using a fork or skewer.
          </li>
          <li>
            <strong>Step 9:</strong> In a mixing bowl, combine the whole milk,
            sweetened condensed milk, and evaporated milk. Pour this mixture
            evenly over the warm cake.
          </li>
          <li>
            <strong>Step 10:</strong> Let the cake cool to room temperature,
            then refrigerate for at least 4 hours or overnight to allow the cake
            to absorb the milk mixture.
          </li>
          <li>
            <strong>Step 11:</strong> Before serving, whip the heavy cream until
            stiff peaks form, and spread it over the cake.
          </li>
          <li>
            <strong>Step 12:</strong> Serve chilled and enjoy your Tres Leches
            Cake!
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

export default TresLechesCakeRecipeComponent;
