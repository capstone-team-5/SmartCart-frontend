import React, { useState, useEffect } from "react";
import axios from "axios";

const CrispyOnionRingsRecipeComponent = ({
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
            Crispy Onion Rings
          </h3>
          <img
            src="https://www.mylatinatable.com/wp-content/uploads/2016/01/foto-heroe-1024x693-2-500x375.jpg"
            alt="Crispy Onion Rings"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">2 large onions</li>
            <li className="mb-4">2 cups buttermilk</li>
            <li className="mb-4">2 cups all-purpose flour</li>
            <li className="mb-4">1 teaspoon paprika</li>
            <li className="mb-4">1/2 teaspoon cayenne pepper</li>
            <li className="mb-4">1/2 teaspoon garlic powder</li>
            <li className="mb-4">Salt and pepper to taste</li>
            <li className="mb-4">Vegetable oil for frying</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Peel and slice the
            onions into rings.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Place the onion rings
            in a bowl and pour buttermilk over them. Let them soak for about 30
            minutes.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> In a separate bowl, mix
            flour, paprika, cayenne pepper, garlic powder, salt, and pepper.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Heat vegetable oil in a
            deep fryer or a large pot to 375°F (190°C).
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Remove the onion rings
            from the buttermilk and coat them in the flour mixture.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Fry the onion rings in
            batches until golden brown and crispy, about 2-3 minutes per batch.
            Drain on paper towels.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Serve the Crispy Onion
            Rings hot with your favorite dipping sauce.
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

export default CrispyOnionRingsRecipeComponent;
