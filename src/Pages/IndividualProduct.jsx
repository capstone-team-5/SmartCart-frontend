import IndividualProductComponent from "../MVPComponents/IndividualProductComponent";

const IndividualProduct = ({ handleAddToCart, cartLength }) => {
  return (
    <div>
      <IndividualProductComponent
        handleAddToCart={handleAddToCart}
        cartLength={cartLength}
      />
    </div>
  );
};

export default IndividualProduct;
