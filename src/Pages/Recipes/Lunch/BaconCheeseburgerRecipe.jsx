// Bacon Cheeseburger Recipe Page

import BaconCheeseburgerRecipe1Component from "../../../NonMVPComponents/Recipes/Lunch/BaconCheeseburgerRecipe1Component";

const BaconCheeseburgerRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Laura Ground Beef", "Oscar Mayer Bacon", "Kraft Cheddar Cheese Slices", "Martins Potato Rolls Hamburger Buns", "Iceberg Lettuce", "Tomatoes", "Red Onions", "Heinz Tomato Ketchup", "Frenchs Mustard", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]

  return (
    <div>
      <BaconCheeseburgerRecipe1Component
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default BaconCheeseburgerRecipe;
