//Grilled Cheese Sandwich Recipe Page

import GrilledCheeseSandwichRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/GrilledCheeseSandwichRecipeComponent";

const GrilledCheeseSandwichRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Italian White Bread", "Kraft Cheddar Cheese Slices", "Land OLakes Salted Butter"]

  return (
    <div>
      <GrilledCheeseSandwichRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default GrilledCheeseSandwichRecipe;
