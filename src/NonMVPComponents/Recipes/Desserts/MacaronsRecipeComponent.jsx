import React, { useState, useEffect } from "react";
import axios from "axios";

const MacaronsRecipeComponent = ({
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
      <h3 className="text-2xl font-semibold mb-4">Macarons</h3>
      <img
        src="https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200"
        alt="Macarons"
        style={{ width: "300px", height: "auto" }}
      />
      <div className="recipe">
        <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>1 cup almond flour</li>
          <li>2 cups confectioners' sugar</li>
          <li>3 large egg whites, room temperature</li>
          <li>1/4 cup granulated sugar</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>Food coloring (optional)</li>
        </ul>

        <h3 className="text-lg font-semibold mb-2">Directions</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            <strong>Step 1:</strong> In a food processor, pulse almond flour and
            confectioners' sugar until well combined. Sift the mixture through a
            fine-mesh sieve into a large bowl; discard any large pieces.
          </li>
          <li>
            <strong>Step 2:</strong> In a separate bowl, beat egg whites with a
            hand mixer until foamy. Gradually add granulated sugar and continue
            to beat until stiff, glossy peaks form. Add vanilla extract and food
            coloring (if desired), and mix until combined.
          </li>
          <li>
            <strong>Step 3:</strong> Gently fold the almond flour mixture into
            the egg white mixture until fully combined and smooth.
          </li>
          <li>
            <strong>Step 4:</strong> Transfer the batter to a pastry bag fitted
            with a 1/2-inch round tip. Pipe small circles onto parchment-lined
            baking sheets, spacing them about 1 inch apart.
          </li>
          <li>
            <strong>Step 5:</strong> Tap the baking sheets on the counter to
            remove any air bubbles. Let the macarons sit at room temperature for
            30 minutes to 1 hour, or until a skin forms and they are no longer
            sticky to the touch.
          </li>
          <li>
            <strong>Step 6:</strong> Preheat your oven to 300°F (150°C). Bake
            the macarons for 15-18 minutes, or until they lift easily from the
            parchment paper. Let them cool completely on the baking sheets.
          </li>
          <li>
            <strong>Step 7:</strong> Once cooled, carefully remove the macarons
            from the parchment paper and match them up by size.
          </li>
          <li>
            <strong>Step 8:</strong> Fill the macarons with your favorite
            filling, such as ganache or buttercream. Sandwich them together and
            refrigerate for 24 hours to let the flavors meld.
          </li>
          <li>
            <strong>Step 9:</strong> Enjoy your homemade Macarons!
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

export default MacaronsRecipeComponent;
