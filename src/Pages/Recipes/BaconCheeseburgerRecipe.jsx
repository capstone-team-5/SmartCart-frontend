// Bacon Cheeseburger Recipe Page

import BaconCheeseburgerRecipe1Component from "../../NonMVPComponents/BaconCheeseburgerRecipe1Component"

const BaconCheeseburgerRecipe = ({addIngredientsToCart}) => {

    return (
        <div>
            <BaconCheeseburgerRecipe1Component addIngredientsToCart={addIngredientsToCart} />
        </div>
    )
};

export default BaconCheeseburgerRecipe;