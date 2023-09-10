// This function will display results based on user selected category user and from filter side bar
import { useLocation } from "react-router-dom";

const FilterResultsComponent = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  return (
    <div>
      <h3>This is the results page</h3>
    </div>
  );
};

export default FilterResultsComponent;
