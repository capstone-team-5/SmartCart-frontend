//Cajun Prawn Pizza Recipe Page

import CajunPrawnPizzaRecipeComponent from "../../../NonMVPComponents/Recipes/Lunch/CajunPrawnPizzaRecipeComponent"

const CajunPrawnPizzaRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <CajunPrawnPizzaRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default CajunPrawnPizzaRecipe;