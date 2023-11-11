//Baked Mac And Cheese Recipe Page

import BakedMacAndCheeseRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/BakedMacAndCheeseRecipeComponent ";

const BakedMacAndCheeseRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Kraft Sharp Shredded Cheese", "Parmesan", "Horizon Organic Whole Milk", "Land OLakes Salted Butter", "King Arthur Flour", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]
  
  return (
    <div>
      <BakedMacAndCheeseRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default BakedMacAndCheeseRecipe;
