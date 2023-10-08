import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
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
    </div>
  );
};

export default Home;
