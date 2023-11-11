//Oatmeal Chocolate Chip Cookies Recipe Page

import OatmealChocolateChipCookiesRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/OatmealChocolateChipCookiesRecipeComponent";

const OatmealChocolateChipCookiesRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Domino Granulated Sugar", "Domino Light Brown Sugar", "Large Brown Eggs", "McCormick Pure Vanilla Extract", "King Arthur Flour", "Arm & Hammer Baking Soda", "Iodized Salt", "McCormick Ground Cinnamon", "Quaker Oats Old Fashioned Oatmeal", "Nestlé Toll House Semi-Sweet Chocolate"]

  return (
    <div>
      <OatmealChocolateChipCookiesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default OatmealChocolateChipCookiesRecipe;
