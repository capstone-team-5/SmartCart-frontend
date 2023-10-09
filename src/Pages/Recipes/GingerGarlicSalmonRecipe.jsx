//Ginger Garlic Salmon Recipe Page

import GingerGarlicSalmonRecipeComponent from "../../NonMVPComponents/GingerGarlicSalmonRecipeComponent"

const GingerGarlicSalmonRecipe = ({ addIngredientsToCart }) => {
    
    const nameOfIngredients = ["Wild Salmon", "Garlic", "Ginger", "Kikkoman Soy Sauce", "Natures Nate Unfiltered Honey", "Bertolli Extra Virgin Olive Oil", "Kadoya Sesame oil", "McCormick Red pepper flakes", "McCormick Pure Ground Black pepper", "Coarse Kosher Salt", "Cilantro"]

    return (
        <div>
            <GingerGarlicSalmonRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default GingerGarlicSalmonRecipe;