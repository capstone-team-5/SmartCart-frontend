//Cheese Omelette recipe page

import CheeseOmeletteRecipeComponent from "../../NonMVPComponents/CheeseOmeletteRecipeComponent"

const CheeseOmeletteRecipe = ({handleAddToCartClick , addToCart, updateCartWithSpecificIds, cart, setCart }) => {
    const specificIds = [131, 136, 135, 64]; 
    console.log("Specific IDs in CheeseOmeletteRecipe:", specificIds);


    return (
        <div>
            <CheeseOmeletteRecipeComponent handleAddToCartClick={handleAddToCartClick } addToCart={addToCart} setCart={setCart} cart={cart} updateCartWithSpecificIds={updateCartWithSpecificIds} specificIds={specificIds} />
        </div>
    )
};

export default CheeseOmeletteRecipe;