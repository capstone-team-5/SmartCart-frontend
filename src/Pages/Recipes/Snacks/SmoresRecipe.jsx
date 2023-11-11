//S'mores Recipe Pages

import SmoresRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/SmoresRecipeComponent";

const SmoresRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Honey Maid Graham crackers"]

  return (
    <div>
      <SmoresRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />;
    </div>
  ) 
};

export default SmoresRecipe;
