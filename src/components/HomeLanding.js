import React from "react";
import { useHistory } from "react-router-dom";
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

                <Navi color={"rgba(0,0,0, 0.4)"}/>

                <div className={"homelanding-text"}>
                    <div>
                        <h3>Vibras</h3>
                        <p>Handmade Soy Candles</p>
                    </div>

                    <button className={"vibras-button-1"} onClick={goToShop}>Shop Now</button>
                </div>
            </div>
            
        </div>
    )
};

export default HomeLandingSubscribe;