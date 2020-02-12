import React from "react";
import { Route } from "react-router-dom";

import candle1 from "../images/candle1.jpg"
import candle2 from "../images/candle2.jpg"
import candle3 from "../images/candle3.jpg"
import candle4 from "../images/candle4.jpg"

import ShopHome from "./ShopHome.js";

const Shop = () => {
    return (
        <div className={"shop-container"}>

            <Route path={"/shop"} component={ShopHome} />
            
        </div>
    )
};

export default Shop;