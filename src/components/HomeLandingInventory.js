import React from "react";
import { useHistory } from "react-router-dom";

const HomeLandingInventory = () => {
    const history = useHistory();

    const goToShop = (e) => {
        e.preventDefault();
        history.push("/shop")
    }
    return (
        <div className={"homelanding-inventory-container"}>

            <h1 className={"homelanding-inventory-banner"}>
                Handmade Natural Candles
            </h1>
            
            <button className={"homelanding-inventory-button"} onClick={goToShop}>
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
            </div>

            {/* <hr style={{"width":"100%"}}/> */}

        </div>
    )
};

export default HomeLandingInventory;