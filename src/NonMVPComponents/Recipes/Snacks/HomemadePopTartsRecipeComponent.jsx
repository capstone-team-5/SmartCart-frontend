import React, { useState, useEffect } from "react";
import axios from "axios";

const HomemadePopTartsRecipeComponent = ({
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
            Homemade Pop Tarts
          </h3>
          <img
            src="https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2017/01/homemade-pop-tarts-17.jpg"
            alt="Homemade Pop Tarts with Real Strawberry Filling"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 sheets of refrigerated pie crusts</li>
            <li className="mb-4">1 cup fresh strawberries, diced</li>
            <li className="mb-4">2 tablespoons granulated sugar</li>
            <li className="mb-4">1/2 tablespoon cornstarch</li>
            <li className="mb-4">1 cup powdered sugar</li>
            <li className="mb-4">2 tablespoons milk</li>
            <li className="mb-4">1/2 teaspoon vanilla extract</li>
            <li className="mb-4">Sprinkles (optional)</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            350°F (175°C) and line a baking sheet with parchment paper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a saucepan, combine
            diced strawberries, granulated sugar, and cornstarch. Cook over
            medium heat, stirring constantly until the mixture thickens and the
            strawberries break down (about 5-7 minutes).
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Remove from heat and
            let it cool. Roll out the pie crusts and cut them into rectangles.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Place a spoonful of the
            strawberry filling in the center of half of the rectangles.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Place another rectangle
            on top of each strawberry-filled rectangle and use a fork to seal
            the edges.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Bake for 12-15 minutes
            or until the pastries are golden brown.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> While the pop tarts are
            cooling, whisk together the powdered sugar, milk, and vanilla
            extract to make the icing.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Once the pop tarts are
            completely cool, drizzle the icing over them and add sprinkles if
            desired.
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

export default HomemadePopTartsRecipeComponent;
