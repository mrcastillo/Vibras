import React from "react";
import candleShop from "../images/candle1.jpg"
import candleNew from "../images/candle3.jpg"
import Navi from "../components/Navi";

const HomeLandingSubscribe = () => {
    return (
        <div className={"homelanding-container"}>
            
            {/* 
            <div className={"homelanding-textinfo"}>
                <h1>Natural Soy Candles</h1>
                <p>Handcrafted & Homemade</p>
                <button>View All Candles</button>
            </div>
            */}
            <div className={"sale"}>
                Get 10% off all sales!
            </div>
            <div className={"homelanding-image"}>
                
                <Navi />

                <div className={"homelanding-text"}>
                    <span>
                        Handmade all natural candles
                    </span>
                    
                    <div className={"homelanding-text-buttons"}>
                        <button>Shop Vibras</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeLandingSubscribe;