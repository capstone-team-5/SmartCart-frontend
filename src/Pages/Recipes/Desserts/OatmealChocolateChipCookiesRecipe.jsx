//Oatmeal Chocolate Chip Cookies Recipe Page

import OatmealChocolateChipCookiesRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/OatmealChocolateChipCookiesRecipeComponent";

const OatmealChocolateChipCookiesRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <OatmealChocolateChipCookiesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default OatmealChocolateChipCookiesRecipe;
