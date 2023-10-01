//Chocolate Chip Cookies Recipe Page

import ChocolateChipCookiesRecipeComponent from "../../NonMVPComponents/Recipes/Desserts/ChocolateChipCookiesRecipeComponent"

const ChocolateChipCookiesRecipe = ({addIngredientsToCart}) => {
    
    return (
        <div>
            <ChocolateChipCookiesRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default ChocolateChipCookiesRecipe;