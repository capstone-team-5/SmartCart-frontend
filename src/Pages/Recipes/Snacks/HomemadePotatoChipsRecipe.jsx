//Homemade Potato Chips Recipe Page

import HomemadePotatoChipsRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/HomemadePotatoChipsRecipeComponent";

const HomemadePotatoChipsRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "Potatoes",
    "Crisco Pure Vegetable Oil",
    "Iodized Salt",
  ];
  return (
    <div>
      <HomemadePotatoChipsRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default HomemadePotatoChipsRecipe;
