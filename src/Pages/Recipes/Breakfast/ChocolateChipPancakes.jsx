//This page will be for the chocolate chip pancakes

import ChocolateChipPancakesRecipeComponent from "../../../NonMVPComponents/Recipes/Breakfast/ChocolateChipPancakesComponent"

const ChocolateChipPancakesRecipe = ({ addIngredientsToCart }) => {
    
    const nameOfIngredients = ["King Arthur Flour", "Domino Granulated Sugar", "Davis Baking Powder", "Arm & Hammer Baking Soda", "Iodized Salt", "Garlick Farms Buttermilk", "Horizon Organic Whole Milk", "Large White Eggs", "Land OLakes Salted Butter", "Nestlé Toll House Semi-Sweet Chocolate Chips"]

    return (
        <div>
            <ChocolateChipPancakesRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default ChocolateChipPancakesRecipe;