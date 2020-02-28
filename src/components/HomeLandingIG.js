import React from "react";

import candle1 from "../images/candle1.jpg";
import candle2 from "../images/candle2.jpg";
import candle3 from "../images/candle3.jpg";
import candle4 from "../images/candle4.jpg";

const HomeLandingIG = () => {
    return (
        <div className={"homelanding-IG-container"}>
            
            <h2>Instagram</h2>

            <div className={"homelanding-IG-images"}>
                <div>
                    <img src={candle1} />
                </div>
                <div>
                    <img src={candle2} />
                </div>
                <div>
                    <img src={candle3} />
                </div>
                <div>
                    <img src={candle4} />
                </div>
                <div>
                    <img src={candle1} />
                </div>
                <div>
                    <img src={candle2} />
                </div>               
            </div>
        </div>
    )
};

export default HomeLandingIG;