//Spiced Cream Of Wheat Porridge Recipe Page

import SpicedCreamOfWheatPorridgeRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/SpicedCreamOfWheatPorridgeRecipeComponent";

const SpicedCreamOfWheatPorridgeRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Cream of Wheat", "Horizon Organic Whole Milk", "Domino Granulated Sugar", "McCormick Ground Cinnamon", "McCormick Ground Nutmeg", "McCormick Pure Vanilla Extract", "Sun-Maid Natural California Raisins"]
  return (
    <SpicedCreamOfWheatPorridgeRecipeComponent
    nameOfIngredients={nameOfIngredients}
      addIngredientsToCart={addIngredientsToCart}
    />
  );
};

export default SpicedCreamOfWheatPorridgeRecipe;
