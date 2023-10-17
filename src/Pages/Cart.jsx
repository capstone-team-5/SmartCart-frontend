import CartComponent from "../MVPComponents/CartComponent";

const Cart = ({
  deleteItem,
  clearCart,
  cart,
  cartLength,
  handleQuantityChange,
  updateCartLength,
}) => {
  return (
    <div>
      <CartComponent
        deleteItem={deleteItem}
        clearCart={clearCart}
        cart={cart}
        cartLength={cartLength}
        handleQuantityChange={handleQuantityChange}
        updateCartLength={updateCartLength}
      />
    </div>
  );
};

export default Cart;
