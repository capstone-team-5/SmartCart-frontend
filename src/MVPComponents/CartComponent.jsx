//This will function is for the user's cart before they are logged in


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartComponent = ({ deleteItem, clearCart, cart, cartLength }) => {
  
  const [itemQuantities, setItemQuantities] = useState(
    cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {})
  );

  const [upDateCartLength, setUpdateCartLength] = useState(cartLength);


  const handleQuantityChange = (itemId, quantity) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = quantity;
    setItemQuantities(updatedQuantities);
    console.log('upDate', upDateCartLength)
  };

  return (
    <div>
      {cart.length === 0 ? (
        
        <p>Your cart is empty. Click cart to add items
          <Link to='/'>
            <img src='https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif' alt='add to cart' />
            </Link>
        </p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
               <img src={item.image} alt={item.name} width="200px" />
               <h3>{item.name}</h3>
             </Link>
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
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </p>
          </div>
        ))
      )}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartComponent;

