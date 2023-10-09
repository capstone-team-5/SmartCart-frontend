import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Categories from "../MVPComponents/HomeComponent/Categories";
import FrozenSlider from "../MVPComponents/HomeComponent/FrozenSlider";
import RecipeSlider from "../MVPComponents/HomeComponent/RecipeSlider";
import FallSlider from "../MVPComponents/HomeComponent/FallSlider";
import ConfettiComponent from "../NonMVPComponents/ConfettiComponent";
import PrintComponent from "../MVPComponents/PrintComponent";
const Home = () => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <FallSlider />
      <ConfettiComponent />
      <InternationalSlider />
      <FrozenSlider />
      <RecipeSlider />
      <PrintComponent />
    </div>
  );
};

export default Home;
