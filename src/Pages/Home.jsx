import HomeComponent from "../MVPComponents/oldHomeComponent";

const Home = ({ addToCart }) => {
  return (
    <div className="page-container">
      <HomeComponent addToCart={addToCart} />
    </div>
  );
};

export default Home;
