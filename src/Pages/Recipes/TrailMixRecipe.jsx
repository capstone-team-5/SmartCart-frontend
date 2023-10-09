//Trail Mix Recipe Page

import TrailMixRecipeComponent from "../../NonMVPComponents/TrailMixRecipeComponent"

const TrailMixRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <TrailMixRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default TrailMixRecipe;