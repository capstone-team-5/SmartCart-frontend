import React, { useState, useEffect } from "react";
import axios from "axios";

const BakedMacAndCheeseRecipeComponent = ({
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
            Baked Mac and Cheese
          </h3>
          <img
            src="https://www.culinaryhill.com/wp-content/uploads/2022/12/Baked-Mac-and-Cheese-Culinary-Hill-1200x800-warm.jpg"
            alt="Baked Mac and Cheese"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 cups elbow macaroni</li>
            <li className="mb-4">4 cups shredded cheddar cheese</li>
            <li className="mb-4">1/2 cup grated Parmesan cheese</li>
            <li className="mb-4">3 cups milk</li>
            <li className="mb-4">1/4 cup butter</li>
            <li className="mb-4">2 1/2 teaspoons all-purpose flour</li>
            <li className="mb-4">2 1/2 teaspoons salt</li>
            <li className="mb-4">1/2 teaspoon black pepper</li>
            <li className="mb-4">1/2 teaspoon paprika</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl"> Step 1:</strong> Preheat oven to 350°F
            (175°C). Cook macaroni according to the package directions until al
            dente. Drain.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a saucepan, melt
            butter or margarine over medium heat. Stir in enough flour to make a
            roux. Add milk to roux slowly, stirring constantly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Stir in cheeses, and
            cook over low heat until cheese is melted and the sauce is a little
            thick. Put macaroni in large casserole dish, and pour sauce over
            macaroni. Stir well.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Melt butter or
            margarine in a skillet over medium heat. Add breadcrumbs and brown.
            Spread over the macaroni and cheese to cover. Sprinkle with a little
            paprika.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Bake at 350°F (175°C)
            for 30 minutes. Serve.
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

export default BakedMacAndCheeseRecipeComponent;
