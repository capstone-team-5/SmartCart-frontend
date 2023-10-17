//Cheese Omelette recipe page

import CheeseOmeletteRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/CheeseOmeletteRecipeComponent";

const CheeseOmeletteRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Large White Eggs",
    "Deans Dairy Pure Milk",
    "McCormick Pure Ground Black pepper",
    "Land OLakes Salted Butter",
    "Happy Belly Finely Shredded Mexican Four Cheese Blend",
    "Iodized Salt",
  ];

  return (
    <div>
      <CheeseOmeletteRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default CheeseOmeletteRecipe;
