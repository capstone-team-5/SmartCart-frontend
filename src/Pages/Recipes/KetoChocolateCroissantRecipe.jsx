//Keto Chocolate Chip Recipe Page

import KetoChocolateCroissantsRecipeComponent from "../../NonMVPComponents/KetoChocolateCroissantComponent"

const KetoChocolateCroissantsRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <KetoChocolateCroissantsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default KetoChocolateCroissantsRecipe;