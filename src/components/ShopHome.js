import React from "react";
import Navi from "../components/Navi";
import HomeLandingIG from "../components/HomeLandingIG";

import candle1 from "../images/candle1.jpg"
import candle2 from "../images/candle2.jpg"
import candle3 from "../images/candle3.jpg"
import candle4 from "../images/candle4.jpg"

const ShopHome = () => {
    return (
        <React.Fragment>
            <Navi color={"black"} includeMiddle={true} />

            <div className={"shop-home-items-banner"}>
                <span>Shop</span>
                <p>View the latest from The Vibras Collection</p>
                <hr style={{ "background": "black", "width": "90%" }} />
            </div>

            <div className={"shop-categories"}>
                
            </div>

            {/* <hr style={{ "background": "black", "width": "90%" }} /> */}
            <div className={"shop-filters"}>

            </div>

        </React.Fragment>
    )
};

export default ShopHome;