import React from "react";

import { Link } from "react-router-dom";

const Navi = () => {
    return (
        <div className={"navi-container"}>
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
        </div>
    )
};

export default Navi;