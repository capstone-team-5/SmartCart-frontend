import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Categories from "../MVPComponents/HomeComponent/Categories";
import FrozenSlider from "../MVPComponents/HomeComponent/FrozenSlider";
import RecipeSlider from "../MVPComponents/HomeComponent/RecipeSlider";
import FallSlider from "../MVPComponents/HomeComponent/FallSlider";
import PrintComponent from "../MVPComponents/PrintComponent";
const Home = ({ addToCart }) => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <FallSlider addToCart={addToCart} />
      <InternationalSlider addToCart={addToCart} />
      <FrozenSlider addToCart={addToCart} />
      <RecipeSlider />
      <PrintComponent />
    </div>
  );
};

export default Home;
