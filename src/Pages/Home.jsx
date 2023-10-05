import CategoryHome from "../MVPComponents/HomeComponent/CategoryHome";
import InternationalSlider from "../MVPComponents/HomeComponent/InternationalSlider";
import Vegetables from "../MVPComponents/HomeComponent/Vegetables";
import Fruits from "../MVPComponents/HomeComponent/Fruits";
import Categories from "../MVPComponents/HomeComponent/Categories";
const Home = () => {
  return (
    <div>
      <CategoryHome />
      <Categories />
      <InternationalSlider />
      <Fruits />
      <Vegetables />
    </div>
  );
};

export default Home;
