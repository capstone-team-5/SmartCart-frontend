import SavingsComponent from "../NonMVPComponents/SavingsComponent"

const Savings = ({sortedStores, comparison}) => {
    return (
        <div>
            <SavingsComponent sortedStores={sortedStores} comparison={comparison} />
        </div>
    )
};

export default Savings;