//This page will display the overnight oats recipe

import OvernightOatsRecipeComponent from "../../NonMVPComponents/OvernightOatsComponent"

const OvernightOatsRecipe = ({addIngredientsToCart}) => {
    return (
        <div>
            <OvernightOatsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default OvernightOatsRecipe;