//Homemade Apple Pie Recipe Page

import HomemadeApplePieRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/HomemadeApplePieRecipeComponent";

const HomemadeApplePieRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Fuji apples",
    "Domino Granulated Sugar",
    "King Arthur Flour",
    "McCormick Ground Cinnamon",
    "McCormick Ground Nutmeg",
    "Coarse Kosher Salt",
  ];

  // missing lemon juice,  unsalted butter,  pie crusts

  return (
    <HomemadeApplePieRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default HomemadeApplePieRecipe;
