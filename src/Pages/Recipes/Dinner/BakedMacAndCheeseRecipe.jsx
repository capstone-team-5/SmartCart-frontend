//Baked Mac And Cheese Recipe Page

import BakedMacAndCheeseRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/BakedMacAndCheeseRecipeComponent ";

const BakedMacAndCheeseRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <BakedMacAndCheeseRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default BakedMacAndCheeseRecipe;
