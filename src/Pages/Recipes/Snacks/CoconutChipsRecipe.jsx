//Coconut Chips Recipe Page

import CoconutChipsRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/CoconutChipsRecipeComponent";

const CoconutChipsRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["McCormick Pure Vanilla Extract", "Iodized Salt"]

  return (
    <div>
      <CoconutChipsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default CoconutChipsRecipe;
