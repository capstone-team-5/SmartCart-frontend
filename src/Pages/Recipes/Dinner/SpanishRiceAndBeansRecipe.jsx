//Spanish Rice And Beans Recipe Page

import SpanishRiceAndBeansRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/SpanishRiceAndBeansRecipeComponent";

const SpanishRiceAndBeansRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Long Grain White Rice", "Swanson Chicken Broth", "White Onion", "Orange Peppers", "Red Peppers", "Green Peppers", "Garlic", "Ground Cumin", "Kashmiri Red Chili Powder", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Cilantro"]

  return (
    <div>
      <SpanishRiceAndBeansRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default SpanishRiceAndBeansRecipe;
