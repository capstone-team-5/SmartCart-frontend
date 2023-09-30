//Cheese Omelette recipe page

import CheeseOmeletteRecipeComponent from "../../NonMVPComponents/CheeseOmeletteRecipeComponent"

const CheeseOmeletteRecipe = ({addToCart}) => {
    const nameOfIngredients = ["Large White Eggs", "Milk", "Pure Ground Black pepper", "Land OLakes Salted Butter", "Cheese"]


    return (
        <div>
            <CheeseOmeletteRecipeComponent addToCart={addToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default CheeseOmeletteRecipe;