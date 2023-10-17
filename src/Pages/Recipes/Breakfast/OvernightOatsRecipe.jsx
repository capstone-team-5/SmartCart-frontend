//This page will display the overnight oats recipe

import OvernightOatsRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/OvernightOatsComponent";

const OvernightOatsRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Horizon Organic Whole Milk",
    "Chobani Greek Yogurt, Plain",
    "McCormick Pure Vanilla Extract",
    "Strawberries",
    "Blueberries",
    "Almonds",
  ];
  return (
    <div>
      <OvernightOatsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default OvernightOatsRecipe;
