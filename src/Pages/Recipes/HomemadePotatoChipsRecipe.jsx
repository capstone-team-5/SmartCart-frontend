//Homemade Potato Chips Recipe Page

import HomemadePotatoChipsRecipeComponent from "../../NonMVPComponents/HomemadePotatoChipsRecipeComponent"

const HomemadePotatoChipsRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <HomemadePotatoChipsRecipeComponent addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default HomemadePotatoChipsRecipe