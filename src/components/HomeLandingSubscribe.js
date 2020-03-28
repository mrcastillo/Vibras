import React from "react";

const HomeLandingAbout = () => {
    return (
        <div className={"homelanding-subscribe"}>

            <div className={"homelanding-subscribe-text"}>
                <h3>Follow Vibras</h3>
                <p>Wholsome made candles that inspire & support your spaciousness. Learn what makes Vibras so great.</p>
            </div>      

            <div className={"homelanding-subscribe-container"}>
                <h3>Stay a while...</h3>
                <p>Dont Miss A Thing When You Subscribe Below</p>

                <input type={"text"} placeholder={"Email Address"}></input>

                <button className={"vibras-button-1"}>Subscribe</button>
            </div>
        </div>
        
    )
};

export default HomeLandingAbout;