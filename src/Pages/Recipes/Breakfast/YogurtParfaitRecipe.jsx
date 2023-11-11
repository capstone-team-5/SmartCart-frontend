//Yogurt Parfait Recipe Page

import YogurtParfaitRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/YogurtParfaitRecipeComponent";

const YogurtParfaitRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Chobani Greek Yogurt, Plain", "Nature Valley Oats n Honey Granola", "Strawberries", "Blueberries", "Raspberries", "Natures Nate Unfiltered Honey"]

  return (
    <YogurtParfaitRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
  );
};

export default YogurtParfaitRecipe;
