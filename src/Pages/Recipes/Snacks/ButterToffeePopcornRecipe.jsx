//Butter Toffee Popcorn Recipe Page

import ButterToffeePopcornRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/ButterToffeePopcornRecipeComponent";

const ButterToffeePopcornRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Domino Dark Brown Sugar", "Iodized Salt", "Arm & Hammer Baking Soda", "McCormick Pure Vanilla Extract"]

  return (
    <div>
      <ButterToffeePopcornRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default ButterToffeePopcornRecipe;
