//Jolly Rancher Candy Apples Recipe Page

import JollyRancherCandyApplesRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/JollyRancherCandyApplesRecipeComponent";

const JollyRancherCandyApplesRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Granny Smith Apples"]

  return (
    <div>
      <JollyRancherCandyApplesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default JollyRancherCandyApplesRecipe;
