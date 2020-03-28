import React from "react";

import { Link } from "react-router-dom";
import VibrasLogo from "../images/VibrasLogo-4.jpg";

const openMobileNavi = (event) => {
    event.preventDefault();
    const naviOverlayWidth = document.getElementsByClassName("navi-overlay")[0];
    naviOverlayWidth.style.width = "100%";
};

const closeMobileNavi = (event) => {
    event.preventDefault();
    const naviOverlayWidth = document.getElementsByClassName("navi-overlay")[0];
    naviOverlayWidth.style.width = "0%";
};


const Navi = (props) => {
    return (
        <div className={"navi-container"}>

            {/* Start of Overlay Code for Navigation */}
            <div className={"navi-overlay"} onClick={closeMobileNavi}>
                <div className={"navi-overlay-close"}>
                    <span>Click to close</span>
                </div>

                <div className={"navi-overlay-content"}>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </div>

            <div className={"navi-options"}>
                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/"}>About</Link></div>
                <div><Link to={"/shop"}>Shop</Link></div>
                <div><Link to={"/"}>Cart</Link></div>
            </div>
            {/* End of Overlay Code for Navigation */}

            <div className={"navi-bar-sm"}>
                <div className={"navi-bar-sm-left"} onClick={openMobileNavi}>
                    <span className="material-icons">dehaze</span>
                </div>

                <Link  to={"/"} className={"navi-bar-sm-middle"}>
                    <div id={"logo"}>
                        <img src={VibrasLogo} />
                    </div>

                    <div id={"logo-text"}>
                        <div className={"navi-brand"}>
                            <Link to={"/"}>
                                <span>Vibras</span>
                            </Link>
                        </div>
                    </div>
                </Link>
                
                <div className={"navi-bar-sm-right"}>
                     <span className="material-icons">shopping_cart</span>Cart
                </div>
            </div>
        </div>
    )
};

export default Navi;