import React from "react";
import { useHistory } from "react-router-dom";
import candleShop from "../images/candle1.jpg";
import candleNew from "../images/candle3.jpg";
import Navi from "../components/Navi";

const HomeLandingSubscribe = () => {
    const history = useHistory();

    const goToShop = () => {
        history.push("/shop");
    };

    return (
        <div className={"homelanding-container"}>
            
            <div className={"sale"}>
                Get 10% off all sales!
            </div>
            
            <div className={"homelanding-image"}>

                <Navi />

                <div className={"homelanding-text"}>
                    <div>
                        <h3>Vibras</h3>
                        <p>Handmade Soy Candles</p>
                    </div>

                    <button className={"vibras-button-1"} onClick={goToShop}>View Candles</button>
                </div>
                
            </div>
        </div>
    )
};

export default HomeLandingSubscribe;