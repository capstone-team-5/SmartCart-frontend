// Caprese Sandwich Recipe Page

import CapreseSandwichRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/CapreseSandwichRecipeComponent";

const CapreseSandwichRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Ciabatta Bread", "Polly-O Sliced Mozzarella", "Tomatoes", "Bertolli Extra Virgin Olive Oil", "Newmans Own Balsamic Vinaigrette", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]
  
  return (
    <CapreseSandwichRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default CapreseSandwichRecipe;
