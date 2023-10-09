//Tres Leches Cake Recipe Page

import TresLechesCakeRecipeComponent from "../../NonMVPComponents/TresLechesCakeRecipeComponent";

const TresLechesCakeRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "King Arthur Flour",
    "Milk",
    "Davis Baking Powder",
    "Domino Granulated Sugar",
    "Large White Eggs",
    "McCormick Pure Vanilla Extract",
  ];
  // missingg unsalted butter, sweetened condensed milk,  evaporated milk,  heavy cream
  return (
    <TresLechesCakeRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
    />
  );
};

export default TresLechesCakeRecipe;
