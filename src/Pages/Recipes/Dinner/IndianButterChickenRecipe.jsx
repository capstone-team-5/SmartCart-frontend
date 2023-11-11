//Indian Butter Chicken Recipe Page

import IndianButterChickenRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/IndianButterChickenRecipeComponent";

const IndianButterChickenRecipe = ({ addIngredientsToCart }) => {

  const nameOfIngredients = ["Perdue Boneless Skinless All Natural Chicken Breasts", "Chobani Greek Yogurt, Plain", "Garam Masala Powder", "Kashmiri Red Chili Powder", "McCormick Ground Cinnamon", "Garlic", "Ginger", "Coarse Kosher Salt", "McCormick Pure Ground Black pepper", "Cilantro"]

  return (
    <div>
      <IndianButterChickenRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default IndianButterChickenRecipe;
