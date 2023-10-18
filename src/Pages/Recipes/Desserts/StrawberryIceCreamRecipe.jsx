//Strawberry Ice Cream Recipe

import StrawberryIceCreamRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/StrawberryIceCreamRecipeComponent";

const StrawberryIceCreamRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = [
    "Strawberries",
    "Domino Granulated Sugar",
    "Deans Dairy Pure Milk",
    "McCormick Pure Vanilla Extract",
  ];

  // missing heavy cream
  return (
    <div>
      <StrawberryIceCreamRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}

      />
    </div>
  );
};

export default StrawberryIceCreamRecipe;
