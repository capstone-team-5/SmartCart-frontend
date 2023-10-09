//Jolly Rancher Candy Apples Recipe Page

import JollyRancherCandyApplesRecipeComponent from "../../NonMVPComponents/JollyRancherCandyApplesRecipeComponent"

const JollyRancherCandyApplesRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <JollyRancherCandyApplesRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default JollyRancherCandyApplesRecipe