//Cheese Omelette recipe page

import CheeseOmeletteRecipeComponent from "../../NonMVPComponents/CheeseOmeletteRecipeComponent"

const CheeseOmeletteRecipe = ({addIngredientsToCart}) => {
    const nameOfIngredients = ["Large White Eggs", "Milk", "Pure Ground Black pepper", "Land OLakes Salted Butter", "Cheese"]


    return (
        <div>
            <CheeseOmeletteRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default CheeseOmeletteRecipe;