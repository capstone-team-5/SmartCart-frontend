//Old Fashion Oats

import OldFashionOatsRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/OldFashionOatsRecipeComponent";

const OldFashionOatsRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Quaker Oats Old Fashioned Oatmeal", "Deans Dairy Pure Milk", "Natures Nate Unfiltered Honey", "McCormick Pure Vanilla Extract", "Raspberries", "Peaches"]
  
  return (
    <OldFashionOatsRecipeComponent
      addIngredientsToCart={addIngredientsToCart}
      nameOfIngredients={nameOfIngredients}
    />
  );
};

export default OldFashionOatsRecipe;
