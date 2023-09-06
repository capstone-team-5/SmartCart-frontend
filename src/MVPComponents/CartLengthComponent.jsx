const CartLengthComponent = ({ cartLength }) => {

    console.log('cartLength:', cartLength)
    return (
        <div>
            <h3>{cartLength}</h3>
        </div>
    )
};

export default CartLengthComponent;