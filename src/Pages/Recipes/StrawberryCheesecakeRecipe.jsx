//Strawberry Cheesecake Recipe Page

import StrawberryCheesecakeRecipeComponent from "../../NonMVPComponents/StrawberryCheesecakeRecipeComponent"

const StrawberryCheesecakeRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <StrawberryCheesecakeRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default StrawberryCheesecakeRecipe;