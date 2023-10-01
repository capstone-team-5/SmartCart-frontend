//Vegan Curry Recipe Page

import VeganCurryRecipeComponent from "../../NonMVPComponents/eganCurryRecipeComponent"

const VeganCurryRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <VeganCurryRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default VeganCurryRecipe;