//Chocolate Drizzled Popcorn Recipe Page

import ChocolateDrizzledPopcornRecipeComponent from "../../NonMVPComponents/Recipes/Snacks/ChocolateDrizzledPopcornRecipeComponent";

const ChocolateDrizzledPopcornRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <ChocolateDrizzledPopcornRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default ChocolateDrizzledPopcornRecipe;
