//Strawberry Cheesecake Recipe Page

import StrawberryCheesecakeRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/StrawberryCheesecakeRecipeComponent";

const StrawberryCheesecakeRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Strawberries",
    "Philadelphia Original Cream Cheese",
    "Land OLakes Salted Butter",
    "Domino Granulated Sugar",
    "McCormick Pure Vanilla Extract",
    "Large White Eggs",
    "King Arthur Flour",
    "Honey Maid Graham crackers",
    "Domino Granulated Sugar",
    "Domino Powdered Sugar",
  ];

  return (
    <div>
      <StrawberryCheesecakeRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default StrawberryCheesecakeRecipe;
