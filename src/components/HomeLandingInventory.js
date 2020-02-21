import React from "react";

import candle1 from "../images/candle1.jpg"
import candle2 from "../images/candle2.jpg"
import candle3 from "../images/candle3.jpg"
import candle4 from "../images/candle4.jpg"

const HomeLandingInventory = () => {
    return (
        <div className={"homelanding-inventory-container"}>

            <h1 className={"homelanding-inventory-banner"}>Shop Vibras Collections</h1>
            <button className={"homelanding-inventory-button"}>
                Shop All
            </button>

            <div className={"homelanding-inventory-collection-row"}>
                <div className={"homelanding-inventory-collection-item"}>
                    <div className={"homelanding-inventory-collection-item-img"}>
                        
                    </div>
                    <p>Homemade Signature Soy Candle</p>
                    <span id={"reviews"}>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span className="material-icons">star</span>
                        <span>(4)</span>
                    </span>
                    <span>from $10</span>
                </div>

                <div className={"homelanding-inventory-collection-item"}>
                    <div className={"homelanding-inventory-collection-item-img"}>
                        
                    </div>
                    <p>Homemade Signature Soy Candle</p>
                </div>

                <div className={"homelanding-inventory-collection-item"}>
                    <div className={"homelanding-inventory-collection-item-img"}>
                        
                    </div>
                    <p>Homemade Signature Soy Candle</p>
                </div>
                
                <div className={"homelanding-inventory-collection-item"}>
                    <div className={"homelanding-inventory-collection-item-img"}>
                        
                    </div>
                    <p>Homemade Signature Soy Candle</p>
                </div>
                
                <div className={"homelanding-inventory-collection-item"}>
                    <div className={"homelanding-inventory-collection-item-img"}>
                        
                    </div>
                    <p>Homemade Signature Soy Candle</p>
                </div>
            </div>

            {/* <hr style={{"width":"100%"}}/> */}

        </div>
    )
};

export default HomeLandingInventory;