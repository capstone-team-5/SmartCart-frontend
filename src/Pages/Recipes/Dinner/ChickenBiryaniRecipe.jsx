//Chicken Biryani Recipe Page

import ChickenBiryaniRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/ChickenBiryaniRecipeComponent";

const ChickenBiryaniRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <ChickenBiryaniRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default ChickenBiryaniRecipe;
