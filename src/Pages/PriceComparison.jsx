//This is the price comparison page

import PriceComparisonComponent from "../MVPComponents/PriceComparisonComponent"

const PriceComparison = ({cart}) => {

    return (
        <div>
            <PriceComparisonComponent cart={cart} />
        </div>
    )
};

export default PriceComparison;