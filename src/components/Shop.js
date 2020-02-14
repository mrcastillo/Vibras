import React from "react";
import { Route } from "react-router-dom";

import ShopHome from "./ShopHome.js";
import ShopProduct from "./ShopProduct.js";

const Shop = () => {
    return (
        <div className={"shop-container"}>
            <Route path={`/shop/:product`} component={ShopProduct} />
            <Route exact path={"/shop"} component={ShopHome} />
        </div>
    )
};

export default Shop;