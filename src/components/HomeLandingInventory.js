import React from "react";
import { useHistory } from "react-router-dom";

import candle1 from "../images/candle1.jpg";
import candle2 from "../images/candle3.jpg";

const HomeLandingInventory = () => {
    const history = useHistory();

    const goToShop = (e) => {
        e.preventDefault();
        history.push("/shop")
    }
    return (
        <div className={"homelanding-inventory-container"}>
            <div className={"homelanding-inventory-banner"}>
                <div>Featured</div>
                <p>Our Best Candles</p>
            </div>


            <div className={"homelanding-inventory-collection-column"}>
                <div className={"homelanding-inventory-collection-column-item"}>
                    
                    <div id={"image"}>
                        <img src={candle2} />
                    </div>

                    <p>Regular Candle</p>
                </div>

                <div className={"homelanding-inventory-collection-column-item"}>
                    
                    <div id={"image"}>
                        <img src={candle2} />
                    </div>

                    <p>Regular Candle</p>
                </div>
            </div>
            
            {/* <button className={"vibras-button-1"}>View Inventory</button> */}
        </div>
    )
};

export default HomeLandingInventory;