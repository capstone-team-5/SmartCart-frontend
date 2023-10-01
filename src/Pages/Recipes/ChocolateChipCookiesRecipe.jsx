//Chocolate Chip Cookies Recipe Page

import ChocolateChipCookiesRecipeComponent from "../../NonMVPComponents/ChocolateChipCookiesRecipeComponent"

const ChocolateChipCookiesRecipe = ({addIngredientsToCart}) => {
    
    return (
        <div>
            <ChocolateChipCookiesRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default ChocolateChipCookiesRecipe;