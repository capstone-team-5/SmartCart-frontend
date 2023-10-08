import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Categories from "../MVPComponents/HomeComponent/Categories";
import FrozenSlider from "../MVPComponents/HomeComponent/FrozenSlider";
import RecipeSlider from "../MVPComponents/HomeComponent/RecipeSlider";
const Home = () => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <InternationalSlider />
      <FrozenSlider />
      <RecipeSlider />
    </div>
  );
};

export default Home;
