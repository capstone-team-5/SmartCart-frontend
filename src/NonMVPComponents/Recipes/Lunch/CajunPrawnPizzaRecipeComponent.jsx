import React, { useState, useEffect } from "react";
import axios from "axios";

const CajunPrawnPizzaRecipeComponent = ({
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
            Cajun Prawn Pizza
          </h3>
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cajun-pizza-589e9c2.jpg?quality=90&webp=true&resize=440,400"
            alt="Cajun Prawn Pizza"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">1 pre-made pizza dough</li>
            <li className="mb-4">1/2 cup pizza sauce</li>
            <li className="mb-4">1 1/2 cups shredded mozzarella cheese</li>
            <li className="mb-4">1/2 cup cooked prawns</li>
            <li className="mb-4">1/4 cup sliced red bell pepper</li>
            <li className="mb-4">1/4 cup sliced green bell pepper</li>
            <li className="mb-4">1/4 cup sliced red onion</li>
            <li className="mb-4">1 teaspoon Cajun seasoning</li>
            <li className="mb-4">Fresh parsley for garnish</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            the recommended temperature for the pizza dough.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> Roll out the pizza
            dough on a floured surface to your desired thickness.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Transfer the dough to a
            pizza stone or baking sheet.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Spread pizza sauce
            evenly over the dough, leaving a small border around the edges.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Sprinkle shredded
            mozzarella cheese over the sauce.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Arrange cooked prawns,
            sliced red and green bell peppers, and sliced red onion on top of
            the cheese.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Sprinkle Cajun
            seasoning over the ingredients.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Bake in the preheated
            oven according to the pizza dough instructions until the crust is
            golden and the cheese is bubbly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 9:</strong> Garnish with fresh
            parsley.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 10:</strong> Slice and serve the
            Cajun Prawn Pizza.
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

export default CajunPrawnPizzaRecipeComponent;
