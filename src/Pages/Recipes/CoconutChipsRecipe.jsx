//Coconut Chips Recipe Page

import CoconutChipsRecipeComponent from "../../NonMVPComponents/Recipes/Desserts/CoconutChipsRecipeComponent"

const CoconutChipsRecipe = ({addIngredientsToCart}) => {
     
    return (
        <div>
            <CoconutChipsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default CoconutChipsRecipe;