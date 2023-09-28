import IndividualProductComponent from "../MVPComponents/IndividualProductComponent";

const IndividualProduct = ({handleAddToCart, cartLength, addToFavorites}) => {
  return (
    <div>
      <IndividualProductComponent handleAddToCart={handleAddToCart} cartLength={cartLength} addToFavorites={addToFavorites} />
    </div>
  );
};

export default IndividualProduct;