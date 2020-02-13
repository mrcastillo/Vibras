import React from "react";

import candle from "../images/candle1.jpg";

const ShopProduct = () => {
    return (
        <div className={"shop-product-container"}>
            <div className={"homelanding-break"}></div>

            <div className={"shop-product-main"}>

                <div className={"shop-product-main-navi"}>
                    <span>Home - </span>
                    <span>Shop - </span>
                    <span>Soy Candle</span>
                </div>

                <div className={"shop-product-main-img"}>
                    <img src={candle} />
                </div>

                <div className={"shop-product-main-info"}>
                    <h1>Soy Candle</h1>
                    <p>Our original and most basic product.</p>
                    <p>Price: $10</p>

                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
};

export default ShopProduct;