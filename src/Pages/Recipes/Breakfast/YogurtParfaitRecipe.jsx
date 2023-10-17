//Yogurt Parfait Recipe Page

import YogurtParfaitRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/YogurtParfaitRecipeComponent";

const YogurtParfaitRecipe = ({ addIngredientsToCart }) => {
  return (
    <YogurtParfaitRecipeComponent addIngredientsToCart={addIngredientsToCart} />
  );
};

export default YogurtParfaitRecipe;
