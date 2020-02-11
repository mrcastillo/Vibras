import React from "react";
import candleShop from "../images/candle1.jpg"
import candleNew from "../images/candle3.jpg"
import cpu from "../images/computer.jpg";

const HomeLanding = () => {
    return (
        <div className={"homelanding-container"}>
            <div className={"homelanding-banner"}>
                Exclusive 20% sale happening now! Discount applied at check out.
            </div>

            
            <div className={"homelanding-textinfo"}>
                <h1>Natural Soy Candles</h1>
                <p>Handcrafted & Homemade</p>
                <button>View All Candles</button>
            </div>

            <div className={"homelanding-image"}>
                <img src={cpu} /> 

                <div className={"homelanding-small"}>
                    Inventory
                </div>
            
            </div>
        </div>
    )
};

export default HomeLanding;