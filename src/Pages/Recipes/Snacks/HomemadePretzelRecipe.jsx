//Homemade Pretzel Recipe Page

import HomemadePretzelRecipeComponent from "../../../NonMVPComponents/Recipes/Snacks/HomemadePretzelRecipeComponent"

const HomemadePretzelRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <HomemadePretzelRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default HomemadePretzelRecipe;