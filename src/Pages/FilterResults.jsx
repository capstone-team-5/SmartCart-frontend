import FilterResultsComponent from "../MVPComponents/FilterResultsComponent"

const FilterResults = ({addToCart}) => {
    return (
        <div>
            <FilterResultsComponent addToCart={addToCart} />
        </div>
    )
};

export default FilterResults