import React from "react";

import { Link } from "react-router-dom";



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

const Navi = () => {
    return (
        <div className={"navi-container"}>

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

            <div className={"navi-brand"}>
                <Link to={"/"}>
                        <span>Vibras</span>
                </Link>
            </div>
            <div className={"navi-social"}>
                <Link to={"/"}>
                    <span>by Emily</span>
                </Link>
            </div>

            <div className={"navi-options"}>
                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/"}>About</Link></div>
                <div><Link to={"/shop"}>Shop</Link></div>
                <div><Link to={"/"}>Cart</Link></div>
            </div>

            <div className={"navi-options-sm"}>
                <div className={"navi-options-sm-left"} onClick={openMobileNavi}>
                    <span className="material-icons">reorder</span>
                </div>
                <div className={"navi-options-sm-right"}>
                    <span className="material-icons">search</span>
                    <span className="material-icons">shopping_cart</span>
                </div>
                

            </div>
        </div>
    )
};

export default Navi;