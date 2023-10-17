//Macarons Recipe Page

import MacaronsRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/MacaronsRecipeComponent";

const MacaronsRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Bobs Red Mill Super-Fine Almond Flour",
    "Domino Granulated Sugar",
    "McCormick Pure Vanilla Extract",
  ];

  // missing confectioners' sugar, egg whites, Food coloring

  return (
    <div>
      <MacaronsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    </div>
  );
};

export default MacaronsRecipe;
