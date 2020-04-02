import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import displayImage1 from "../images/VibrasMultipleCandles.png";
import displayImage2 from "../images/VibrasMultipleCandles2.jpeg";
import displayImage3 from "../images/candle11.jpeg";

var background = "../images/VibrasMultipleCandles";

const HomeLandingSubscribe = () => {
    const history = useHistory();

    const goToShop = () => {
        history.push("/shop");
    };

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className={"homelanding-container"}>
            

            <div className={"homelanding-intro-text"}>
                Fall In Love With You - Handmade Candles
            </div>

            <div className={"homelanding-shop-display"} style={{backgroundImage: `url(${displayImage3})`}}>
                <div className={"homelanding-shop-display-text"}>
                    1/3
                </div>

                <div className={"homelanding-shop-display-text-bottom"}> 
                    <p>Vibras by Emy</p>
                    <p>Handmade Soy Candles</p>
                </div>
            </div>

            <div className={"homelanding-shop-goto"}>
                
            </div>
        </div>
    )
};

export default HomeLandingSubscribe;