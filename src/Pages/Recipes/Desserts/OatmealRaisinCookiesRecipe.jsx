//Oatmeal Raisin Cookies Recipe Page

import OatmealRaisinCookiesRecipeComponent from "../../../NonMVPComponents/Recipes/Desserts/OatmealRaisinCookiesRecipeComponent"

const OatmealRaisinCookiesRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <OatmealRaisinCookiesRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default OatmealRaisinCookiesRecipe;