//This is the price comparison page

import PriceComparisonComponent from "../MVPComponents/PriceComparisonComponent"

const PriceComparison = ({cart, stores, comparison, loading, showDrumRoll, sortedStores}) => {

    return (
        <div>
            <PriceComparisonComponent cart={cart} stores={stores} comparison={comparison} loading={loading} showDrumRoll={showDrumRoll} sortedStores={sortedStores}  />
        </div>
    )
};

export default PriceComparison;