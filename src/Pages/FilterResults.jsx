import FilterResultsComponent from "../MVPComponents/FilterResultsComponent";
import FilterSideBarComponent from "../MVPComponents/FilterSideBarComponent";

const FilterResults = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <FilterSideBarComponent />
      </div>
      <div className="col-span-1">
        <FilterResultsComponent />
      </div>
    </div>
  );
};

export default FilterResults;
