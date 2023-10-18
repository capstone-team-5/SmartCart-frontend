// Farro Bowl With Rotisserie Chicken Recipe Page

import FarroBowlWithRotisserieChickenRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/FarroBowlWithRotisserieChickenRecipeComponent";

const FarroBowlWithRotisserieChickenRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Bobs Red Mill Farro", "Cucumber", "Red Onions", "Athenos Feta Cheese", "Newmans Own Balsamic Vinaigrette", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]
  return (
    <FarroBowlWithRotisserieChickenRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default FarroBowlWithRotisserieChickenRecipe;
