import React from "react";

import candle1 from "../images/candle1.jpg"
import candle2 from "../images/candle2.jpg"
import candle3 from "../images/candle3.jpg"
import candle4 from "../images/candle4.jpg"

const ShopHome = () => {
    return (
        <React.Fragment>
            <div className={"shop-categories"}>
                <span>Newest Releases</span>
                <span>Soy Candles</span>
                <span>Flavored Candles</span>
                <span>Vaporub Candles</span>
            </div>

            <div className={"shop-filters"}>

            </div>

            <h1 className={"shop-home-items-banner"}>
                <span>Collections</span>
            </h1>

            <div className={"shop-home-items-container"}>

                <div className={"shop-home-item"}>
                    <div className={"shop-home-item-img"}>
                        <img src={candle1} />
                    </div>

                    <div className={"shop-home-item-info"}>
                        <div className={"shop-home-item-info-text"}>
                            <h2>Soy Candle</h2>
                            <p>Soy, Blueberries, Apples, Corn</p>
                            <p>$10</p>
                        </div>

                        <div className={"shop-home-item-info-view"}>
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div className={"shop-home-item"}>
                    <div className={"shop-home-item-img"}>
                        <img src={candle2} />
                    </div>

                    <div className={"shop-home-item-info"}>
                        <div className={"shop-home-item-info-text"}>
                            <h2>Vicks Candle</h2>
                            <p>Soy, Blueberries, Apples, Corn</p>
                            <p>$10</p>
                        </div>

                        <div className={"shop-home-item-info-view"}>
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div className={"shop-home-item"}>
                    <div className={"shop-home-item-img"}>
                        <img src={candle3} />
                    </div>

                    <div className={"shop-home-item-info"}>
                        <div className={"shop-home-item-info-text"}>
                            <h2>Rose Candle</h2>
                            <p>Soy, Blueberries, Apples, Corn</p>
                            <p>$10</p>
                        </div>

                        <div className={"shop-home-item-info-view"}>
                            <button>View</button>
                        </div>
                    </div>
                </div>

                <div className={"shop-home-item"}>
                    <div className={"shop-home-item-img"}>
                        <img src={candle4} />
                    </div>

                    <div className={"shop-home-item-info"}>
                        <div className={"shop-home-item-info-text"}>
                            <h2>Vapo Candle</h2>
                            <p>Soy, Blueberries, Apples, Corn</p>
                            <p>$10</p>
                        </div>

                        <div className={"shop-home-item-info-view"}>
                            <button>View</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"shop-home-shopall"}>
                <button>Shop All</button>
            </div>

            <div className={"homelanding-break"}></div>

            <div className={"shop-home-item-subscribe"}>
                <h1>Get the latest news</h1>
                <p>Subscribe now to get the latest from Vibras</p>

                <form>
                    <input type={"text"} id={"email"} placeholder={"my email"} value={""}></input>
                    <input type={"submit"} id={"submit"} value={"Subscribe"} />
                </form>
            </div>
        </React.Fragment>
    )
};

export default ShopHome;