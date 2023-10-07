import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Vegetables from "../MVPComponents/HomeComponent/Vegetables";
import Fruits from "../MVPComponents/HomeComponent/Fruits";
import Categories from "../MVPComponents/HomeComponent/Categories";
import NonVegetarianSlider from "../MVPComponents/HomeComponent/NonVegetarianSlider";
import RecipeSlider from "../MVPComponents/HomeComponent/RecipeSlider";
const Home = () => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <InternationalSlider />
      <NonVegetarianSlider />
      <RecipeSlider />
      <Fruits />
      <Vegetables />
    </div>
  );
};

export default Home;
