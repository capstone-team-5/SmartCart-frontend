//This will function is for the user's cart before they are logged in


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CartComponent = ({ deleteItem, clearCart, cart, cartLength, handleQuantityChange, updateCartLength }) => {
  const [itemQuantities, setItemQuantities] = useState({});
  const [comparison, setComparison] = useState({});


  useEffect(() => {
    const quantities = cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {});

    setItemQuantities(quantities);
  }, [cart]);

  const handleQuantityChangeClick = (itemId, change) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[itemId] + change >= 1) {
      updatedQuantities[itemId] += change;
      handleQuantityChange(itemId, updatedQuantities[itemId]);
      setItemQuantities(updatedQuantities);
    }
  };

  const handleSubmit = () => {
    const cartIds = cart.map((food) => food.id);
    const convertIdsToString = cartIds.join(',');

    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/compare-prices?productIds=${convertIdsToString}`

    axios.get(backendEndPoint)
      .then((response) => {
        setComparison(response.data)
        console.log(response.data)
        if (response.status === 200) {
        console.log('the ids have been successfully sent')
        } else {
          console.log('The ids were not sent')
      }
    })
    .catch(error => console.log('error:',error))
  };

  useEffect(() => {
   
    const cartTotal = Object.values(itemQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );
    updateCartLength(cartTotal); 
  }, [itemQuantities, cartLength, updateCartLength]);

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
              <button onClick={() => handleQuantityChangeClick(item.id, -1)}>-</button>
              {itemQuantities[item.id]}
              <button onClick={() => handleQuantityChangeClick(item.id, 1)}>+</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </p>
          </div>
        ))
      )}
      <button onClick={clearCart}>Clear Cart</button>
      <br /> <br />
      <Link to='/price-compare'>
        {/* Will add loading to price compare */}
        <button onClick={handleSubmit}>Confirm Your Cart!</button>
      </Link>
    </div>
  );
};

export default CartComponent;