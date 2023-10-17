import React, { useState, useEffect } from "react";
import axios from "axios";

const SpanishRiceAndBeansRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Spanish Rice and Beans</h3>
      <img
        src="https://www.liveeatlearn.com/wp-content/uploads/2019/02/spanish-rice-beans-vert-500x375.jpg"
        alt="Spanish Rice and Beans"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup long-grain white rice</li>
          <li>2 cups chicken or vegetable broth</li>
          <li>1 can (15 oz) black beans, drained and rinsed</li>
          <li>1 can (15 oz) diced tomatoes with green chilies</li>
          <li>1 small onion, diced</li>
          <li>1 bell pepper, diced</li>
          <li>2 cloves garlic, minced</li>
          <li>2 teaspoons ground cumin</li>
          <li>1 teaspoon chili powder</li>
          <li>1/2 teaspoon paprika</li>
          <li>Salt and pepper to taste</li>
          <li>Chopped fresh cilantro for garnish</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large skillet, heat a bit of oil over
            medium heat. Add diced onions and bell peppers and sauté until
            softened, about 3-4 minutes.
          </li>
          <li>
            <strong>Step 2:</strong> Add minced garlic and cook for an
            additional 30 seconds until fragrant.
          </li>
          <li>
            <strong>Step 3:</strong> Add rice to the skillet and cook for 2-3
            minutes, stirring occasionally until the rice is lightly toasted.
          </li>
          <li>
            <strong>Step 4:</strong> Stir in chicken or vegetable broth, diced
            tomatoes with green chilies, black beans, ground cumin, chili
            powder, paprika, salt, and pepper. Bring to a boil.
          </li>
          <li>
            <strong>Step 5:</strong> Reduce heat to low, cover, and simmer for
            20-25 minutes or until the rice is cooked and the liquid is
            absorbed.
          </li>
          <li>
            <strong>Step 6:</strong> Remove from heat and let it sit for 5
            minutes. Fluff with a fork and garnish with chopped fresh cilantro
            before serving.
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

export default SpanishRiceAndBeansRecipeComponent;
