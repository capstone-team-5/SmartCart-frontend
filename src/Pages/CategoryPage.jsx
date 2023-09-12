import CategoryComponent from "../MVPComponents/CategoryComponent";
import FilterSideBarComponent from "../MVPComponents/FilterSideBarComponent";

const CategoryPage = ({ applyFilters }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <FilterSideBarComponent applyFilters={applyFilters}/>
      </div>
      <div className="col-span-1">
        <CategoryComponent />
      </div>
    </div>
  );
};

export default CategoryPage;
