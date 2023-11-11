//Cajun Prawn Pizza Recipe Page

import CajunPrawnPizzaRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/CajunPrawnPizzaRecipeComponent";

const CajunPrawnPizzaRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Pillsbury Pre-made Pizza Dough", "Polly-O Sliced Mozzarella", "Red Peppers", "Green Peppers", "Red Onions", "Tony Chachere Cajun Seasonings"]

  return (
    <div>
      <CajunPrawnPizzaRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default CajunPrawnPizzaRecipe;
