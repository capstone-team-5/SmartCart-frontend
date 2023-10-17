//Blueberry Waffles Recipe Page

import BlueberryWafflesRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/BlueberryWafflesComponent";

const BlueberryWafflesRecipe = ({ addIngredientsToCart }) => {
  const nameOfIngredients = [
    "King Arthur Flour",
    "Domino Granulated Sugar",
    "Davis Baking Powder",
    "Iodized Salt",
    "Horizon Organic Whole Milk",
    "Crisco Pure Vegetable Oil",
    "Large Brown Eggs",
    "McCormick Pure Vanilla Extract",
    "Blueberries",
  ];

  return (
    <div>
      <BlueberryWafflesRecipeComponent
        addIngredientsToCart={addIngredientsToCart}
        nameOfIngredients={nameOfIngredients}
      />
    </div>
  );
};

export default BlueberryWafflesRecipe;
