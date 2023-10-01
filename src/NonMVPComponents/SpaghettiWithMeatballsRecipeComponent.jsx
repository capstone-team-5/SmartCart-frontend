import React, { useState, useEffect } from "react";
import axios from "axios";

const SpaghettiWithMeatballsRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Spaghetti with Meatballs</h3>
      <img
        src="https://static01.nyt.com/images/2017/04/05/dining/05COOKING-NIGMEATBALLS2/05COOKING-NIGMEATBALLS2-superJumbo.jpg"
        alt="Spaghetti with Meatballs"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 pound ground beef</li>
          <li>1/2 pound ground pork</li>
          <li>1/2 cup breadcrumbs</li>
          <li>1/4 cup grated Parmesan cheese</li>
          <li>1/4 cup milk</li>
          <li>1/4 cup fresh parsley, chopped</li>
          <li>1 egg</li>
          <li>1 teaspoon salt</li>
          <li>1/2 teaspoon black pepper</li>
          <li>1/2 teaspoon garlic powder</li>
          <li>1/2 teaspoon onion powder</li>
          <li>1/4 cup vegetable oil</li>
          <li>1 can (24 oz) tomato sauce</li>
          <li>1 can (14 oz) crushed tomatoes</li>
          <li>1 teaspoon dried basil</li>
          <li>1 teaspoon dried oregano</li>
          <li>1/2 teaspoon sugar</li>
          <li>1 pound spaghetti</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a large bowl, combine ground beef,
            ground pork, breadcrumbs, Parmesan cheese, milk, chopped parsley,
            egg, salt, black pepper, garlic powder, and onion powder. Mix until
            well combined.
          </li>
          <li>
            <strong>Step 2:</strong> Form the mixture into meatballs, about 1
            inch in diameter.
          </li>
          <li>
            <strong>Step 3:</strong> Heat vegetable oil in a large skillet over
            medium heat. Add meatballs and brown on all sides. Remove and drain
            on paper towels.
          </li>
          <li>
            <strong>Step 4:</strong> In the same skillet, add tomato sauce,
            crushed tomatoes, dried basil, dried oregano, and sugar. Stir to
            combine. Return the meatballs to the skillet.
          </li>
          <li>
            <strong>Step 5:</strong> Simmer the sauce and meatballs for 20-30
            minutes, or until the meatballs are cooked through and the sauce is
            heated.
          </li>
          <li>
            <strong>Step 6:</strong> Cook spaghetti according to package
            instructions. Drain.
          </li>
          <li>
            <strong>Step 7:</strong> Serve meatballs and sauce over cooked
            spaghetti.
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

export default SpaghettiWithMeatballsRecipeComponent;
