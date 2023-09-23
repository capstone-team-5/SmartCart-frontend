//This is the price comparison page

import PriceComparisonComponent from "../MVPComponents/PriceComparisonComponent"

const PriceComparison = ({cart, stores}) => {

    return (
        <div>
            <PriceComparisonComponent cart={cart} stores={stores} />
        </div>
    )
};

export default PriceComparison;