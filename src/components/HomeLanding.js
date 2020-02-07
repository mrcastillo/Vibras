import React from "react";
import candleShop from "../images/candle1.jpg"
import candleNew from "../images/candle3.jpg"
import cpu from "../images/computer.jpg";

const HomeLanding = () => {
    return (
        <div className={"homelanding-container"}>
            <div className={"homelanding-banner"}>
                Vibras By Emily
            </div>

            
            <div className={"homelanding-textinfo"}>
                <h1>Vibras By Emily</h1>
                <p>Vibes from Vibras</p>
                <button>View All Candles</button>
            </div>

            <div className={"homelanding-image"}>
                <img src={cpu} />
            </div>
            {/*

            <div className={"homelanding-new"}>
                <img src={candleNew} />
                <h1>New From Vibras</h1>
            </div>
            

            <div className={"homelanding-shop"}>
                <img src={candleShop} />
                <h1>Shop Vibras</h1>
            </div>
        */}
        </div>
    )
};

export default HomeLanding;