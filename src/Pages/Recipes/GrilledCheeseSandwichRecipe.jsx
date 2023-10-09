//Grilled Cheese Sandwich Recipe Page

import GrilledCheeseSandwichRecipeComponent from "../../NonMVPComponents/GrilledCheeseSandwichRecipeComponent"

const GrilledCheeseSandwichRecipe = ({addIngredientsToCart}) => {
   

    return (
        <div>
            <GrilledCheeseSandwichRecipeComponent  addIngredientsToCart={ addIngredientsToCart} />
        </div>
    )
};

export default GrilledCheeseSandwichRecipe