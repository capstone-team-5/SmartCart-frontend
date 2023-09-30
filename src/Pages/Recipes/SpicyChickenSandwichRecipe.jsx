//Spicy Chicken Sandwich Recipe Page

import SpicyChickenSandwichRecipeComponent from "../../NonMVPComponents/SpicyChickenSandwichRecipeComponent"

const SpicyChickenSandwichRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <SpicyChickenSandwichRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default SpicyChickenSandwichRecipe;