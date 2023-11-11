//Homemade Pop Tarts Recipe

import HomemadePopTartsRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/HomemadePopTartsRecipeComponent";

const HomemadePopTartsRecipe = ({ addIngredientsToCart }) => {
  
  const nameOfIngredients = ["Strawberries", "Domino Granulated Sugar", "Domino Powdered Sugar", "Deans Dairy Pure Milk", "McCormick Pure Vanilla Extract"]

  return (
    <div>
      <HomemadePopTartsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default HomemadePopTartsRecipe;
