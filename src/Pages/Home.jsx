import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Categories from "../MVPComponents/HomeComponent/Categories";
import FrozenSlider from "../MVPComponents/HomeComponent/FrozenSlider";
import RecipeSlider from "../MVPComponents/HomeComponent/RecipeSlider";
import FallSlider from "../MVPComponents/HomeComponent/FallSlider";
const Home = () => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <FallSlider />
      <InternationalSlider />
      <FrozenSlider />
      <RecipeSlider />
    </div>
  );
};

export default Home;
