//Crispy Onion Rings Recipe Page

import CrispyOnionRingsRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/CrispyOnionRingsRecipeComponent";

const CrispyOnionRingsRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <CrispyOnionRingsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default CrispyOnionRingsRecipe;
