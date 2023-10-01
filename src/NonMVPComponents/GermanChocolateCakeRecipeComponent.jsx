import React, { useState, useEffect } from "react";
import axios from "axios";

const GermanChocolateCakeRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">German Chocolate Cake</h3>
      <img
        src="https://saltandbaker.com/wp-content/uploads/2019/06/best-ever-german-chocolate-cake.jpg"
        alt="German Chocolate Cake"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 and 3/4 cups all-purpose flour</li>
          <li>1 and 1/2 teaspoons baking powder</li>
          <li>1 and 1/2 teaspoons baking soda</li>
          <li>3/4 cup unsweetened cocoa powder</li>
          <li>2 cups granulated sugar</li>
          <li>2 large eggs</li>
          <li>1 cup buttermilk</li>
          <li>1/2 cup vegetable oil</li>
          <li>2 teaspoons pure vanilla extract</li>
          <li>1 cup boiling water</li>
          <li>1 cup chopped pecans</li>
          <li>1 cup shredded coconut</li>
          <li>1/2 cup unsalted butter</li>
          <li>1 cup evaporated milk</li>
          <li>1 cup granulated sugar</li>
          <li>3 large egg yolks</li>
          <li>1 teaspoon pure vanilla extract</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> Preheat your oven to 350°F (175°C). Grease and flour three 9-inch round cake pans.
          </li>
          <li>
            <strong>Step 2:</strong> In a mixing bowl, sift together the flour, cocoa powder, baking powder, and baking soda. Set aside.
          </li>
          <li>
            <strong>Step 3:</strong> In a large mixing bowl, beat the eggs until creamy, then add the sugar and continue to beat until light and fluffy.
          </li>
          <li>
            <strong>Step 4:</strong> Add the buttermilk, vegetable oil, and vanilla extract to the egg mixture and mix until well combined.
          </li>
          <li>
            <strong>Step 5:</strong> Gradually add the dry ingredients to the wet ingredients, mixing until just combined.
          </li>
          <li>
            <strong>Step 6:</strong> Stir in the boiling water until the batter is smooth. The batter will be thin, but that's okay.
          </li>
          <li>
            <strong>Step 7:</strong> Divide the batter evenly among the prepared cake pans.
          </li>
          <li>
            <strong>Step 8:</strong> Bake in the preheated oven for 30-35 minutes or until a toothpick inserted into the center of the cakes comes out clean.
          </li>
          <li>
            <strong>Step 9:</strong> While the cakes are baking, prepare the coconut pecan frosting. In a saucepan, combine the evaporated milk, sugar, egg yolks, butter, and vanilla extract. Cook over medium heat, stirring constantly until the mixture thickens, about 12 minutes. Remove from heat and stir in the shredded coconut and chopped pecans. Allow the frosting to cool to room temperature.
          </li>
          <li>
            <strong>Step 10:</strong> Once the cakes are done baking, remove them from the oven and let them cool in the pans for 10 minutes. Then, remove the cakes from the pans and let them cool completely on wire racks.
          </li>
          <li>
            <strong>Step 11:</strong> Once the cakes are completely cool, spread a layer of the coconut pecan frosting on top of one cake layer. Place the second layer on top and repeat. Finally, place the third cake layer on top and frost the top and sides of the entire cake with the remaining frosting.
          </li>
          <li>
            <strong>Step 12:</strong> Slice and enjoy your delicious German Chocolate Cake!
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

export default GermanChocolateCakeRecipeComponent;
