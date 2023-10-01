//Jamaican Jerk Chicken Recipe Page

import JamaicanJerkChickenRecipeComponent from "../../NonMVPComponents/JamaicanJerkChickenRecipeComponent"

const JamaicanJerkChickenRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <JamaicanJerkChickenRecipeComponent addIngredientsToCart={addIngredientsToCart}  />
        </div>
    )
};

export default JamaicanJerkChickenRecipe;