//Crispy Onion Rings Recipe Page

import CrispyOnionRingsRecipeComponent from "../../NonMVPComponents/CrispyOnionRingsRecipeComponent"

const CrispyOnionRingsRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <CrispyOnionRingsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default CrispyOnionRingsRecipe;