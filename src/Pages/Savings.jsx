import SavingsComponent from "../NonMVPComponents/SavingsComponent"

const Savings = ({sortedStores, comparison, stores}) => {
    return (
        <div>
            <SavingsComponent sortedStores={sortedStores} comparison={comparison} stores={stores} />
        </div>
    )
};

export default Savings;