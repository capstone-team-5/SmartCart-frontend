//Whole Wheat Veggie Wrap

import WholeWheatVeggieWrapRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/WholeWheatVeggieWrapRecipeComponent";

const WholeWheatVeggieWrapRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Spinach", "Sabra Hummus", "Butter Lettuce", "Cucumber", "Red Peppers", "Yellow Peppers", "Green Peppers", "Baby Carrots", "Iodized Salt", "McCormick Pure Ground Black pepper"]

  return (
    <div>
      <WholeWheatVeggieWrapRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default WholeWheatVeggieWrapRecipe;
