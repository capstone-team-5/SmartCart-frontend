
import FilterResultsComponent from "../MVPComponents/FilterResultsComponent";
import FilterSideBarComponent from "../MVPComponents/FilterSideBarComponent";
import { useLocation } from "react-router-dom";
const FilterResults = ({ addToCart, applyFilters }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <FilterSideBarComponent applyFilters={applyFilters} />
      </div>
      <div className="col-span-1">
        <FilterResultsComponent
          addToCart={addToCart}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default FilterResults;

