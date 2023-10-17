import React, { useState, useEffect } from "react";
import axios from "axios";

const FarroBowlWithRotisserieChickenRecipeComponent = ({
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
        Farro Bowl with Rotisserie Chicken
      </h3>
      <img
        src="https://www.eatingwell.com/thmb/BPaWZ52825U3VaTyAMW-xdfHBFs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3-ingredient-mediterranean-farro-bowl-03d8ae97c41b43eaba08f0c6998da890.jpg"
        alt="Farro Bowl with Rotisserie Chicken"
        className="w-full h-60 object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-8">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-4">1 cup cooked farro</li>
          <li className="mb-4">1 cup shredded rotisserie chicken</li>
          <li className="mb-4">1/2 cup cherry tomatoes, halved</li>
          <li className="mb-4">1/2 cup cucumber, diced</li>
          <li className="mb-4">1/4 cup red onion, finely chopped</li>
          <li className="mb-4">1/4 cup crumbled feta cheese</li>
          <li className="mb-4">2 tablespoons fresh parsley, chopped</li>
          <li className="mb-4">2 tablespoons balsamic vinaigrette dressing</li>
          <li className="mb-4">Salt and pepper to taste</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a large bowl, combine cooked farro,
            shredded rotisserie chicken, cherry tomatoes, cucumber, red onion,
            feta cheese, and fresh parsley.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Drizzle balsamic vinaigrette dressing over
            the ingredients.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Season with salt and pepper to taste.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Toss everything together until well
            combined.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Serve the Farro Bowl with Rotisserie
            Chicken immediately.
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

export default FarroBowlWithRotisserieChickenRecipeComponent;
