//Strawberry Ice Cream Recipe

import StrawberryIceCreamRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/StrawberryIceCreamRecipeComponent";

const StrawberryIceCreamRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Strawberries",
    "Domino Granulated Sugar",
    "Milk",
    "McCormick Pure Vanilla Extract",
  ];

  // missing heavy cream
  return (
    <div>
      <StrawberryIceCreamRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default StrawberryIceCreamRecipe;
