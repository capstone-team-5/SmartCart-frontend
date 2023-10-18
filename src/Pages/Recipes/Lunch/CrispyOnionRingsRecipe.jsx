//Crispy Onion Rings Recipe Page

import CrispyOnionRingsRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/CrispyOnionRingsRecipeComponent";

const CrispyOnionRingsRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Yellow Onion", "Garlick Farms Buttermilk", "King Arthur Flour", "Cayenne Pepper Spice", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Martins Potato Rolls Hamburger Buns", "Iceberg Lettuce", "Tomatoes", "Hellmanns Real Mayonnaise"]

  return (
    <div>
      <CrispyOnionRingsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default CrispyOnionRingsRecipe;
