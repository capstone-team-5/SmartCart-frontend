//Chocolate Chip Cookies Recipe Page

import ChocolateChipCookiesRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/ChocolateChipCookiesRecipeComponent";

const ChocolateChipCookiesRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Domino Granulated Sugar",
    "McCormick Pure Vanilla Extract",
    "Large Brown Eggs",
    "King Arthur Flour",
    "Arm & Hammer Baking Soda",
    "Nestlé Toll House Semi-Sweet Chocolate Chips",
  ];

  //   missing   unsalted butter, brown sugar, Iodized Salt
  return (
    <div>
      <ChocolateChipCookiesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default ChocolateChipCookiesRecipe;
