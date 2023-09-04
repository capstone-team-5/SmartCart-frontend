//This will function is for the user's cart

const CartComponent = ({ addToCart, deleteItem, clearCart, cart }) => {
    
    

    return (
        <div>
                {/* <h3>This is the cart component</h3>
                {cart.map((food) => {
                    return <div key={food.product_id}>
                        <button onClick={() => addToCart(food.product_name, food.product_image)}>Add to Cart</button>
                    </div>
                })} */}
        </div>
        
    )
};

export default CartComponent;