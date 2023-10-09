// This is the search results page

import SearchResultsComponent from "../MVPComponents/SearchResultsComponent";

const SearchResults = ({ addToCart }) => {
  return (
    <div>
      <SearchResultsComponent addToCart={addToCart} />
    </div>
  );
};

export default SearchResults;
