import React from "react";

const Navi = () => {
    return (
        <div className={"navi-container"}>
            <div className={"navi-brand"}>
                <span>Vibras</span>
            </div>
            <div className={"navi-social"}>
                <span>by Emily</span>
                
            </div>

            <div className={"navi-options"}>
                <div>Home</div>
                <div>About</div>
                <div>Shop</div>
                <div>Cart</div>
            </div>
        </div>
    )
};

export default Navi;