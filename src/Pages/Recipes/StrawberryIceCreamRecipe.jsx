//Strawberry Ice Cream Recipe

import StrawberryIceCreamRecipeComponent from "../../NonMVPComponents/StrawberryIceCreamRecipeComponent"

const StrawberryIceCreamRecipe = ({addIngredientsToCart}) => {
    
    return (
        <div>
            <StrawberryIceCreamRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default StrawberryIceCreamRecipe;