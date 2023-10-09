//Strawberry Cheesecake Recipe Page

import StrawberryCheesecakeRecipeComponent from "../../NonMVPComponents/StrawberryCheesecakeRecipeComponent"

const StrawberryCheesecakeRecipe = ({ addIngredientsToCart }) => {
    
    const nameOfIngredients = ["Strawberries", "Philadelphia Original Cream Cheese", "Land OLakes Salted Butter", "Domino Granulated Sugar", "McCormick Pure Vanilla Extract", "Large White Eggs", "King Arthur Flour" ]

    return (
        <div>
            <StrawberryCheesecakeRecipeComponent addIngredientsToCart={addIngredientsToCart} nameOfIngredients={nameOfIngredients} />
        </div>
    )
};

export default StrawberryCheesecakeRecipe;