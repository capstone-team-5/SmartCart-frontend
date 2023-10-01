//Homemade Apple Pie Recipe Page

import HomemadeApplePieRecipeComponent from "../../NonMVPComponents/HomemadeApplePieRecipeComponent"

const HomemadeApplePieRecipe = ({ addIngredientsToCart }) => {

    return (
        <HomemadeApplePieRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    )
};

export default HomemadeApplePieRecipe;