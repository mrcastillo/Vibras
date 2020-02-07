import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navi from "./components/Navi";
import HomeLanding from "./components/HomeLanding";
import HomeLandingCarol from "./components/HomeLandingCarol";
import HomeLandingInventory from "./components/HomeLandingInventory";

const App = () => {
    return(
        <div className={"app-container"}>
            <Router>
                <Navi/>
                <HomeLanding/>
                <div className={"homelanding-break"}></div>
                <HomeLandingCarol />
                <div className={"homelanding-break"}></div>
                <HomeLandingInventory />
            </Router>
        </div>
    )
};

export default App;