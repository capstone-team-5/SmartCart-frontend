//Ginger Garlic Salmon Recipe Page

import GingerGarlicSalmonRecipeComponent from "../../NonMVPComponents/GingerGarlicSalmonRecipeComponent"

const GingerGarlicSalmonRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <GingerGarlicSalmonRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default GingerGarlicSalmonRecipe;