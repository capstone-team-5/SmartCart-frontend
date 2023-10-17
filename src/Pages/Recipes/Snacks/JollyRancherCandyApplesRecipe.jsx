//Jolly Rancher Candy Apples Recipe Page

import JollyRancherCandyApplesRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/JollyRancherCandyApplesRecipeComponent";

const JollyRancherCandyApplesRecipe = ({ addIngredientsToCart }) => {
  return (
    <div>
      <JollyRancherCandyApplesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
      />
    </div>
  );
};

export default JollyRancherCandyApplesRecipe;
