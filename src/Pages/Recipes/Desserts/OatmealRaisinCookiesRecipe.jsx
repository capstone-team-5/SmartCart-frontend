//Oatmeal Raisin Cookies Recipe Page

import OatmealRaisinCookiesRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/OatmealRaisinCookiesRecipeComponent";

const OatmealRaisinCookiesRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Domino Granulated Sugar", "Domino Dark Brown Sugar", "Large Brown Eggs", "McCormick Pure Vanilla Extract", "King Arthur Flour", "Arm & Hammer Baking Soda", "McCormick Ground Cinnamon", "Iodized Salt", "Quaker Oats Old Fashioned Oatmeal", "Sun-Maid Natural California Raisins"]

  return (
    <div>
      <OatmealRaisinCookiesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default OatmealRaisinCookiesRecipe;
