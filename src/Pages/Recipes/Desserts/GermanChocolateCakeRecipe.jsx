//German Chocolate Cake Recipe Page

import GermanChocolateCakeRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/GermanChocolateCakeRecipeComponent";

const GermanChocolateCakeRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "King Arthur Flour",
    "Davis Baking Powder",
    "Arm & Hammer Baking Soda",
    "Domino Granulated Sugar",
    "Large White Eggs",
    "Garlick Farms Buttermilk",
    "Crisco Pure Vegetable Oil",
    "McCormick Pure Vanilla Extract",
    "Pecans",
  ];
  //missing this recipe is wrong too much repeat check - unsweetened cocoa powder, boiling water, shredded coconut, unsalted butter, egg yolk, evaporated milk
  return (
    <GermanChocolateCakeRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default GermanChocolateCakeRecipe;
