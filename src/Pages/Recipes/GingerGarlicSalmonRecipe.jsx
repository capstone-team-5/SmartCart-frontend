//Ginger Garlic Salmon Recipe Page

import GingerGarlicSalmonRecipeComponent from "../../NonMVPComponents/GingerGarlicSalmonRecipeComponent"

const GingerGarlicSalmonRecipe = ({ addIngredientsToCart }) => {
    
    const nameOfIngredients = ["Wild Salmon", "Garlic"]

    return (
        <div>
            <GingerGarlicSalmonRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default GingerGarlicSalmonRecipe;