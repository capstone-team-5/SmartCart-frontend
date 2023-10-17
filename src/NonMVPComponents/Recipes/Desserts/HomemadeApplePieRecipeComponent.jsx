import React, { useState, useEffect } from "react";
import axios from "axios";

const HomemadeApplePieRecipeComponent = ({
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
            Homemade Apple Pie
          </h3>
          <img
            src="https://amandascookin.com/wp-content/uploads/2016/11/homemade-apple-pie-680.jpg"
            alt="Homemade Apple Pie"
            className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-4">
              6-7 cups peeled, cored, and sliced apples (about 6-7 medium-sized
              apples)
            </li>
            <li className="mb-4">3/4 cup granulated sugar</li>
            <li className="mb-4">2 tablespoons all-purpose flour</li>
            <li className="mb-4">1 teaspoon ground cinnamon</li>
            <li className="mb-4">1/4 teaspoon ground nutmeg</li>
            <li className="mb-4">1/4 teaspoon salt</li>
            <li className="mb-4">1 tablespoon lemon juice</li>
            <li className="mb-4">2 tablespoons unsalted butter</li>
            <li className="mb-4">
              2 prepared pie crusts (1 for the bottom and 1 for the top)
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> Preheat your oven to
            425°F (220°C).
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> In a large bowl,
            combine the sliced apples, granulated sugar, all-purpose flour,
            ground cinnamon, ground nutmeg, salt, and lemon juice. Toss until
            the apples are evenly coated.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> Place one of the
            prepared pie crusts in a 9-inch pie dish.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Spoon the apple filling
            into the pie crust, spreading it out evenly.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Dot the top of the
            apple filling with small pieces of unsalted butter.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Place the second pie
            crust over the filling and crimp the edges to seal the pie.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Cut small slits in the
            top crust to allow steam to escape.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 8:</strong> Bake in the preheated
            oven for 45-55 minutes, or until the crust is golden brown and the
            filling is bubbling.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 9:</strong> Remove from the oven
            and let the pie cool before serving. Enjoy your Homemade Apple Pie!
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

export default HomemadeApplePieRecipeComponent;
