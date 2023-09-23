//This component will be used for the user to answer which store they shopped at

import { useState, useEffect } from "react"

const WhereDidYouShopComponent = ({comparison}) => {
    return (
        <div>
            {comparison.map((store) => {
                return store.store_name
            })}
        </div>
    )
};

export default WhereDidYouShopComponent;