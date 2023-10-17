//Spanish Rice And Beans Recipe Page

import SpanishRiceAndBeansRecipeComponent from "../../../NonMVPComponents/Recipes/Dinner/SpanishRiceAndBeansRecipeComponent"

const SpanishRiceAndBeansRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <SpanishRiceAndBeansRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default SpanishRiceAndBeansRecipe;