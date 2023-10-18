//Bajan CouCou With Flying Fish Recipe Page

import BajanCouCouWithFlyingFishRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/BajanCouCouWithFlyingFishRecipeComponent";

const BajanCouCouWithFlyingFishRecipe = ({ addIngredientsToCart }) => {
  
  const nameOfIngredients = ["Yellow Onion", "Green Peppers", "Garlic", "Land OLakes Salted Butter", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper"]
  
  return (
    <div>
      <BajanCouCouWithFlyingFishRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default BajanCouCouWithFlyingFishRecipe;
