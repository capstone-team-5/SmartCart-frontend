//Trail Mix Recipe Page

import TrailMixRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/TrailMixRecipeComponent";

const TrailMixRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <TrailMixRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    </div>
  );
};

export default TrailMixRecipe;
