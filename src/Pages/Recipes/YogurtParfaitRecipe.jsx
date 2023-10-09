//Yogurt Parfait Recipe Page

import YogurtParfaitRecipeComponent from "../../NonMVPComponents/YogurtParfaitRecipeComponent";

const YogurtParfaitRecipe = ({addIngredientsToCart}) => {

    return (
        <YogurtParfaitRecipeComponent addIngredientsToCart={addIngredientsToCart} />
    )
};

export default YogurtParfaitRecipe;