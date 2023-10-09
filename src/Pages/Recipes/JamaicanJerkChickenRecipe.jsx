//Jamaican Jerk Chicken Recipe Page

import JamaicanJerkChickenRecipeComponent from "../../NonMVPComponents/JamaicanJerkChickenRecipeComponent"

const JamaicanJerkChickenRecipe = ({addIngredientsToCart}) => {

    const nameOfIngredients = ["Perdue Boneless Skinless All Natural Chicken Breasts", "Bertolli Extra Virgin Olive Oil", "Kikkoman", "Garlic"]
    return (
        <div>
            <JamaicanJerkChickenRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients}  />
        </div>
    )
};

export default JamaicanJerkChickenRecipe;