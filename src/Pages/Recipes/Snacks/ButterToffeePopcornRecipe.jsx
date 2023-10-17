//Butter Toffee Popcorn Recipe Page

import ButterToffeePopcornRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/ButterToffeePopcornRecipeComponent";

const ButterToffeePopcornRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <ButterToffeePopcornRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default ButterToffeePopcornRecipe;
