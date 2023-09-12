import HomeComponent from "../MVPComponents/HomeComponent";

const Home = ({ addToCart }) => {
    return (
        <div>
            <HomeComponent addToCart={addToCart} />
        </div>
    )
};

export default Home;