import React from "react";

import candle from "../images/candle3.jpg"
const HomeLandingCarol = () => {
    return (
        <div className={"homelanding-carol-container"}>

            <h2>Introducing Vibras By Emily</h2>
            <div className={"homelanding-carol-img"}>
                <img src={candle} />
            </div>

            <div className={"homelanding-carol-navi"}> 
                <p> &#60; * * * * * &#62; </p>
            </div>
        </div>
    )
};

export default HomeLandingCarol;