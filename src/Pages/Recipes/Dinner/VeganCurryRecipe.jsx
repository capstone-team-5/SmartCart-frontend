//Vegan Curry Recipe Page

import VeganCurryRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/VeganCurryRecipeComponent";

const VeganCurryRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Carrots", "Celery", "Broccoli", "Cauliflower", "Red Peppers", "Yellow Peppers", "Chickpeas Garbanzo Beans", "Garlic", "Ginger", "Curry Powder", "Crisco Pure Vegetable Oil", "Coarse Kosher Salt", "Cilantro"]
  
  return (
    <div>
      <VeganCurryRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      
      />
    </div>
  );
};

export default VeganCurryRecipe;
