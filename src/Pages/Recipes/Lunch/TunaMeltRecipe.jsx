//Tuna Melt Recipe Page

import TunaMeltRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/TunaMeltRecipeComponent"

const TunaMeltRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <TunaMeltRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default TunaMeltRecipe;