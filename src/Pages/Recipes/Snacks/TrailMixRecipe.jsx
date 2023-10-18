//Trail Mix Recipe Page

import TrailMixRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/TrailMixRecipeComponent";

const TrailMixRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Almonds", "Cashew Nuts", "Walnuts", "Pecans", "Pistachios", "Sun-Maid Natural California Raisins", "Nestlé Toll House Semi-Sweet Chocolate Chips"]

  return (
    <div>
      <TrailMixRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
    </div>
  );
};

export default TrailMixRecipe;
