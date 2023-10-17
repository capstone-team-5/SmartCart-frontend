import React, { useState, useEffect } from "react";
import axios from "axios";

const StrawberryIceCreamRecipeComponent = ({
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
        Homemade Strawberry Ice Cream
      </h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGrHPtMinRNe6_wwRtVrpc-svyEHqdkAw-lyGSxSm4ZfDE3vvbCIU7YP_KxjjbAcCSyU&usqp=CAU"
        alt="Homemade Strawberry Ice Cream"
        className="w-full h-60 object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8">Ingredients</h3>
          <ul className="list-disc pl-6 mb-4">
          <li className="mb-4">2 cups fresh strawberries, hulled and sliced</li>
          <li className="mb-4">1 cup granulated sugar, divided</li>
          <li className="mb-4">2 cups heavy cream</li>
          <li className="mb-4">1 cup whole milk</li>
          <li className="mb-4">1 teaspoon vanilla extract</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-8">Directions</h3>
        <ol className="pl-6 mb-4">
          <li className="mb-4">
            <strong className="text-xl">Step 1:</strong> In a mixing bowl, combine the sliced
            strawberries and 1/2 cup of granulated sugar. Let them sit for about
            15 minutes, allowing the strawberries to release their juices.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 2:</strong> After 15 minutes, use a blender or food
            processor to puree the strawberry mixture until smooth.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 3:</strong> In a separate bowl, whisk together the
            remaining 1/2 cup of sugar, heavy cream, whole milk, and vanilla
            extract until the sugar is dissolved.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 4:</strong> Combine the strawberry puree with the cream
            mixture and mix well.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 5:</strong> Pour the mixture into an ice cream maker
            and churn according to the manufacturer's instructions until it
            reaches a soft-serve consistency.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 6:</strong> Transfer the ice cream to an airtight
            container and freeze for at least 4 hours or until firm.
          </li>
          <li className="mb-4">
            <strong className="text-xl">Step 7:</strong> Scoop and enjoy your Homemade Strawberry
            Ice Cream!
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

export default StrawberryIceCreamRecipeComponent;
