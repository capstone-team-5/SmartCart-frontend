//Jamaican Jerk Chicken Recipe Page

import JamaicanJerkChickenRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/JamaicanJerkChickenRecipeComponent";

const JamaicanJerkChickenRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Perdue Boneless Skinless All Natural Chicken Breasts",
    "Bertolli Extra Virgin Olive Oil",
    "Kikkoman Soy Sauce",
    "Garlic",
    "Grace Jamaican Jerk Seasoning",
    "RealLime Lime Juice",
    "Domino Dark Brown Sugar",
    "Thyme",
    "Coarse Kosher Salt",
    "McCormick Pure Ground Black pepper",
  ];
  return (
    <div>
      <JamaicanJerkChickenRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default JamaicanJerkChickenRecipe;
