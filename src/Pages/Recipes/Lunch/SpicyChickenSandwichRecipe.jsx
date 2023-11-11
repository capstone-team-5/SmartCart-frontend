//Spicy Chicken Sandwich Recipe Page

import SpicyChickenSandwichRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/SpicyChickenSandwichRecipeComponent";

const SpicyChickenSandwichRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Perdue Boneless Skinless All Natural Chicken Breasts", "Franks RedHot Original Cayenne Pepper Sauce", "Garlick Farms Buttermilk", "King Arthur Flour", "Cayenne Pepper Spice", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Martins Potato Rolls Hamburger Buns", "Iceberg Lettuce", "Tomatoes", "Hellmanns Real Mayonnaise"]

  return (
    <div>
      <SpicyChickenSandwichRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default SpicyChickenSandwichRecipe;
