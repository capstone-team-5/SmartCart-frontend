//This will function is for the user's cart before they are logged in


import React, { useState } from 'react';

const CartComponent = ({ deleteItem, clearCart, cart }) => {
  const [itemQuantities, setItemQuantities] = useState(
    cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {})
  );

  const handleQuantityChange = (itemId, quantity) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = quantity;
    setItemQuantities(updatedQuantities);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="200px" />
            <p>
              Quantity:
              <button
                onClick={() => {
                  if (itemQuantities[item.id] > 1) {
                    handleQuantityChange(item.id, itemQuantities[item.id] - 1);
                  }
                }}
              >
                -
              </button>
              {itemQuantities[item.id]}
              <button
                onClick={() => {
                  handleQuantityChange(item.id, itemQuantities[item.id] + 1);
                }}
              >
                +
              </button>
              <button onClick={() => deleteItem(item.product_id)}>Delete</button>
            </p>
          </div>
        ))
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartComponent;
