//Spicy Chicken Sandwich Recipe Page

import SpicyChickenSandwichRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/SpicyChickenSandwichRecipeComponent";

const SpicyChickenSandwichRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <SpicyChickenSandwichRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default SpicyChickenSandwichRecipe;
