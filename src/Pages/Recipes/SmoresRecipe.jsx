//S'mores Recipe Pages

import SmoresRecipeComponent from "../../NonMVPComponents/SmoresRecipeComponent"

const SmoresRecipe = ({addIngredientsToCart}) => {

    return (
        <SmoresRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    )
};

export default SmoresRecipe;