import WhereDidYouShopComponent from "../MVPComponents/WhereDidYouShopComponent"

const WhereDidYouShop = ({comparison, sortedStores, handleStoreSelection}) => {

    return (
        <div>
            <WhereDidYouShopComponent comparison={comparison} sortedStores={sortedStores} handleStoreSelection={handleStoreSelection} />
        </div>
    )
};

export default WhereDidYouShop;