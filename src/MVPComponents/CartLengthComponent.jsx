//This function will display the number of items in the cart

const CartLengthComponent = ({ cartLength }) => {
  return (
    <div>
      <h3>{cartLength}</h3>
    </div>
  );
};

export default CartLengthComponent;
