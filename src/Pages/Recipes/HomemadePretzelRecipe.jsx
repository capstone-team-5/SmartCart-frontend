//Homemade Pretzel Recipe Page

import HomemadePretzelRecipeComponent from "../../NonMVPComponents/HomemadePretzelRecipeComponent"

const HomemadePretzelRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <HomemadePretzelRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default HomemadePretzelRecipe;