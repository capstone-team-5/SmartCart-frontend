//Chicken Biryani Recipe Page

import ChickenBiryaniRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/ChickenBiryaniRecipeComponent";

const ChickenBiryaniRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Basmati Rice", "Perdue Boneless Skinless All Natural Chicken Breasts", "Yellow Onion", "Tomatoes", "Chobani Greek Yogurt, Plain", "Kashmiri Red Chili Powder", "Crisco Pure Vegetable Oil", "Coarse Kosher Salt"]

  return (
    <div>
      <ChickenBiryaniRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default ChickenBiryaniRecipe;
