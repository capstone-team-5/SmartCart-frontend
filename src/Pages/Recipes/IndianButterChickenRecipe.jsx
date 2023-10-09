//Indian Butter Chicken Recipe Page

import IndianButterChickenRecipeComponent from "../../NonMVPComponents/IndianButterChickenRecipeComponent"

const IndianButterChickenRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <IndianButterChickenRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default IndianButterChickenRecipe;