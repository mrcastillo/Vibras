import React from "react";
import { useHistory } from "react-router-dom";

import displayImage1 from "../images/VibrasMultipleCandles.png";
import displayImage2 from "../images/VibrasMultipleCandles2.jpeg";
import displayImage3 from "../images/VibrasSeedsRoseCandle2.jpg";

const HomeLandingSubscribe = () => {
    const history = useHistory();

    const goToShop = () => {
        history.push("/shop");
    };



    return (
        <div className={"homelanding-container"}>
            
            {/* 
            <div className={"sale"}>
                Get 10% off all sales!
            </div>
            */}
            <div className={"homelanding-text"}>
                <h3>Handmade Soy Candles</h3>
                <p>Wholsome made candles that inspire & support your spaciousness. Learn what makes Vibras so great.</p>
            </div>        

            <div className={"homelanding-shop-display"}>
                <ul>
                    <li>Featured</li>
                    <li>1/3</li>
                </ul>

                <div className={"homelanding-shop-display-images"}>
                    <img src={displayImage1} />
                </div>

                <button>Shop Candles</button>
            </div>

            <div className={"homelanding-break"}>

            </div>
        </div>
    )
};

export default HomeLandingSubscribe;