//Vegan Curry Recipe Page

import VeganCurryRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/VeganCurryRecipeComponent";

const VeganCurryRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <VeganCurryRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    </div>
  );
};

export default VeganCurryRecipe;
