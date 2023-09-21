import HomeComponent from "../MVPComponents/HomeComponent";

const Home = ({ addToCart }) => {
  return (
    <div className="page-container">
      <HomeComponent addToCart={addToCart} />
    </div>
  );
};

export default Home;
