import React from "react";
import candleShop from "../images/candle1.jpg"
import candleNew from "../images/candle3.jpg"

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
                <div className={"homelanding-text"}>
                    <span>
                        Welcome to Vibras.
                    </span>
                    <span>
                        The Candles That You Will Forever Love.
                    </span>
                    <span>
                        Handmade all natural candles
                    </span>
                    
                    <div className={"homelanding-text-buttons"}>
                        <button>Shop Vibras Handmade Candles</button>
                        <button>Learn more about Vibras.</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeLanding;