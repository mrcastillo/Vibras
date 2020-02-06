import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navi from "./components/Navi";
import HomeLanding from "./components/HomeLanding";
import HomeLandingCarol from "./components/HomeLandingCarol";

const App = () => {
    return(
        <div className={"app-container"}>
            <Router>
                <Navi/>
                <HomeLanding/>
                <HomeLandingCarol />
            </Router>
        </div>
    )
};

export default App;