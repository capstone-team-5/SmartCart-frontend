//Tuna Melt Recipe Page

import TunaMeltRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/TunaMeltRecipeComponent";

const TunaMeltRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Bumble Bee Tuna", "Hellmanns Real Mayonnaise", "Celery", "Red Onions", "Italian White Bread", "Land OLakes Salted Butter", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]

  return (
    <div>
      <TunaMeltRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
    </div>
  );
};

export default TunaMeltRecipe;
