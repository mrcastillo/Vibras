import React from "react";

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <h1>Vibras</h1>

            <div className={"footer-social"}>
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Twitter</span>
            </div>

            <ul>
                <li>About</li>
                <li>Wholesale</li>
                <li>Feedback</li>
                <li>Suggestions</li>
            </ul>

            <p className={"footer-copyright"}>
                © 2020, Vibras, EST New York, 2019. TLC.
            </p>
        </div>
    )
};

export default Footer;