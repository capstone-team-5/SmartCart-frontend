//Spaghetti With Meatballs Recipe Page

import SpaghettiWithMeatballsRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/SpaghettiWithMeatballsRecipeComponent";

const SpaghettiWithMeatballsRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Laura Ground Beef", "Parmesan", "Horizon Organic Whole Milk", "Large White Eggs", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Onion Powder", "Crisco Pure Vegetable Oil", "Domino Granulated Sugar", "Barilla Blue Box Spaghetti"]

  return (
    <div>
      <SpaghettiWithMeatballsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default SpaghettiWithMeatballsRecipe;
