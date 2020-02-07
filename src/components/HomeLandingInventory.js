import React from "react";

import candle1 from "../images/candle1.jpg"
import candle2 from "../images/candle2.jpg"
import candle3 from "../images/candle3.jpg"
import candle4 from "../images/candle4.jpg"

const HomeLandingInventory = () => {
    return (
        <div className={"homelanding-inventory-container"}>
            <h1>Our Collections</h1>
            <hr style={{"width":"100%"}}/>
            <div className={"homelanding-invetory-collection-row"}>
                <div className={"test"}>
                    <div className={"img"} style={{ "background-image": `url(${candle1})` }}> </div>
                    <h1>Soy Candle</h1>
                </div>
                    
                <div className={"test"}>
                    <div className={"img"} style={{ "background-image": `url(${candle2})` }}></div>
                    <h1>Abelita's Vaporub</h1>
                </div>
            </div>

            <div className={"homelanding-invetory-collection-row"}>
                <div className={"test"}>
                    <div className={"img"} style={{ "background-image": `url(${candle3})` }}> </div>
                    <h1>Decorated Candle</h1>
                </div>
                    
                <div className={"test"}>
                    <div className={"img"} style={{ "background-image": `url(${candle4})` }}></div>
                    <h1>Vapo Candle</h1>
                </div>
            </div>

        </div>
    )
};

export default HomeLandingInventory;