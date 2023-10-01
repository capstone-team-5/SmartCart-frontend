import React, { useState, useEffect } from "react";
import axios from "axios";

const ChickenBiryaniRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Chicken Biryani</h3>
      <img
        src="https://hamariweb.com/recipes/images/recipeimages/3464.jpg"
        alt="Chicken Biryani"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>2 cups basmati rice</li>
          <li>1 lb chicken, cut into pieces</li>
          <li>2 onions, thinly sliced</li>
          <li>2 tomatoes, chopped</li>
          <li>1/2 cup plain yogurt</li>
          <li>2 tablespoons ginger-garlic paste</li>
          <li>2 teaspoons biryani masala</li>
          <li>1/2 teaspoon turmeric powder</li>
          <li>1/2 teaspoon red chili powder</li>
          <li>1/4 cup fresh coriander leaves, chopped</li>
          <li>1/4 cup fresh mint leaves, chopped</li>
          <li>4 cups water</li>
          <li>4 tablespoons cooking oil</li>
          <li>Salt to taste</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Wash and soak basmati rice in water for 30
            minutes. Drain and set aside.
          </li>
          <li>
            <strong>Step 2:</strong> In a large pot, heat oil over medium heat.
            Add sliced onions and sauté until golden brown. Remove half of the
            fried onions for garnishing.
          </li>
          <li>
            <strong>Step 3:</strong> Add ginger-garlic paste and sauté for 2
            minutes. Add chicken pieces and cook until they turn white.
          </li>
          <li>
            <strong>Step 4:</strong> Stir in chopped tomatoes, biryani masala,
            turmeric powder, red chili powder, and salt. Cook until tomatoes are
            soft.
          </li>
          <li>
            <strong>Step 5:</strong> Add yogurt, chopped mint leaves, and
            chopped coriander leaves. Cook for 5 minutes.
          </li>
          <li>
            <strong>Step 6:</strong> In a separate large pot, bring 4 cups of
            water to a boil. Add soaked and drained rice. Cook until rice is
            70% cooked. Drain the rice.
          </li>
          <li>
            <strong>Step 7:</strong> Layer the cooked chicken mixture and
            partially cooked rice in the large pot. Top with the reserved fried
            onions.
          </li>
          <li>
            <strong>Step 8:</strong> Cover the pot with a tight-fitting lid and
            simmer on low heat for 20-25 minutes or until the rice is fully
            cooked and aromatic.
          </li>
          <li>
            <strong>Step 9:</strong> Serve hot, garnished with fresh coriander
            and mint leaves.
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

export default ChickenBiryaniRecipeComponent;
