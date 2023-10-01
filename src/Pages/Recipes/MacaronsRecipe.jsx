//Macarons Recipe Page

import MacaronsRecipeComponent from "../../NonMVPComponents/MacaronsRecipeComponent"

const MacaronsRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <MacaronsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default MacaronsRecipe;