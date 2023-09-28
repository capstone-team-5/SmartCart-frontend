import WhereDidYouShopComponent from "../MVPComponents/WhereDidYouShopComponent"

const WhereDidYouShop = ({comparison, sortedStores}) => {

    return (
        <div>
            <WhereDidYouShopComponent comparison={comparison} sortedStores={sortedStores} />
        </div>
    )
};

export default WhereDidYouShop;