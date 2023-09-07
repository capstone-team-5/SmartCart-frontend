import CartComponent from "../MVPComponents/CartComponent"

const Cart = ({ deleteItem, clearCart, cart }) => {
    return (
        <div>
            <CartComponent deleteItem={deleteItem}
            clearCart={clearCart} cart={cart}/>
        </div>
    )
};

export default Cart;