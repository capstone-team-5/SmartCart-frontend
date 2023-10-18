//Chocolate Drizzled Popcorn Recipe Page

import ChocolateDrizzledPopcornRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/ChocolateDrizzledPopcornRecipeComponent";

const ChocolateDrizzledPopcornRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Nestlé Toll House Semi-Sweet Chocolate", "Crisco Pure Vegetable Oil", "Iodized Salt"]

  return (
    <div>
      <ChocolateDrizzledPopcornRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default ChocolateDrizzledPopcornRecipe;
