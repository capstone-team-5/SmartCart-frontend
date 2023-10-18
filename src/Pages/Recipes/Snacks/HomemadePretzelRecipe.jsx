//Homemade Pretzel Recipe Page

import HomemadePretzelRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/HomemadePretzelRecipeComponent";

const HomemadePretzelRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Iodized Salt", "Domino Granulated Sugar", "King Arthur Flour", "Coarse Kosher Salt", "Arm & Hammer Baking Soda"]

  return (
    <div>
      <HomemadePretzelRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default HomemadePretzelRecipe;
