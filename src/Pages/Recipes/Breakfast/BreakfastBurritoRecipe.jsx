//Breakfast Burrito Page

import BreakfastBurritoRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/BreakfastBurritoRecipeComponent";

const BreakfastBurritoRecipe = ({addIngredientsToCart}) => {
  const nameOfIngredients = ["Large White Eggs", "Jimmy Dean Original Breakfast Sausage", "Kraft Sharp Shredded Cheese", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Mission Soft Flour Tortillas", "Tostitos Chunky Salsa (Medium)"]
  return (
    <div>
      <BreakfastBurritoRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
    </div>
  );
};

export default BreakfastBurritoRecipe;
