import CartComponent from "../MVPComponents/CartComponent"

const Cart = ({ deleteItem, clearCart, cart, cartLength }) => {
    return (
        <div>
            <CartComponent deleteItem={deleteItem}
                clearCart={clearCart} cart={cart} cartLength={cartLength} />
        </div>
    )
};

export default Cart;