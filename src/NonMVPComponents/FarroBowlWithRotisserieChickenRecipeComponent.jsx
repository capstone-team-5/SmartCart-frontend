import React, { useState, useEffect } from "react";
import axios from "axios";

const FarroBowlWithRotisserieChickenRecipeComponent = ({
  addIngredientsToCart,
  nameOfIngredients
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
      <h3 className="text-2xl font-semibold mb-4">Farro Bowl with Rotisserie Chicken</h3>
      <img
        src="https://www.eatingwell.com/thmb/BPaWZ52825U3VaTyAMW-xdfHBFs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3-ingredient-mediterranean-farro-bowl-03d8ae97c41b43eaba08f0c6998da890.jpg"
        alt="Farro Bowl with Rotisserie Chicken"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup cooked farro</li>
          <li>1 cup shredded rotisserie chicken</li>
          <li>1/2 cup cherry tomatoes, halved</li>
          <li>1/2 cup cucumber, diced</li>
          <li>1/4 cup red onion, finely chopped</li>
          <li>1/4 cup crumbled feta cheese</li>
          <li>2 tablespoons fresh parsley, chopped</li>
          <li>2 tablespoons balsamic vinaigrette dressing</li>
          <li>Salt and pepper to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large bowl, combine cooked farro,
            shredded rotisserie chicken, cherry tomatoes, cucumber, red onion,
            feta cheese, and fresh parsley.
          </li>
          <li>
            <strong>Step 2:</strong> Drizzle balsamic vinaigrette dressing over
            the ingredients.
          </li>
          <li>
            <strong>Step 3:</strong> Season with salt and pepper to taste.
          </li>
          <li>
            <strong>Step 4:</strong> Toss everything together until well
            combined.
          </li>
          <li>
            <strong>Step 5:</strong> Serve the Farro Bowl with Rotisserie
            Chicken immediately.
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

export default FarroBowlWithRotisserieChickenRecipeComponent;
