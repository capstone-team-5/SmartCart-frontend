//Tres Leches Cake Recipe Page

import TresLechesCakeRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/TresLechesCakeRecipeComponent";

const TresLechesCakeRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "King Arthur Flour",
    "Milk",
    "Davis Baking Powder",
    "Domino Granulated Sugar",
    "Large White Eggs",
    "McCormick Pure Vanilla Extract",
  ];
  // missing unsalted butter, sweetened condensed milk,  evaporated milk,  heavy cream
  return (
    <TresLechesCakeRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default TresLechesCakeRecipe;
