//Keto Chocolate Chip Recipe Page

import KetoChocolateCroissantsRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/KetoChocolateCroissantComponent";

const KetoChocolateCroissantsRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Bobs Red Mill Super-Fine Almond Flour", "Davis Baking Powder", "Iodized Salt", "Large Brown Eggs", "Land OLakes Salted Butter", "McCormick Pure Vanilla Extract"]
  return (
    <div>
      <KetoChocolateCroissantsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default KetoChocolateCroissantsRecipe;
