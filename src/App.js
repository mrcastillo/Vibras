import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeLanding from "./components/HomeLanding";
import HomeLandingInventory from "./components/HomeLandingInventory";
import HomeLandingSubscribe from "./components/HomeLandingSubscribe.js";
import HomeLandingIG from "./components/HomeLandingIG.js";

import Shop from "./components/Shop";

import Footer from "./components/Footer";

const App = () => {
    return(
        <div className={"app-container"}>
            <Router>
                <Route exact path={"/"}>
                    <HomeLanding />

                    <HomeLandingInventory />
                    {/* 
                    <div className={"homelanding-break"}></div>
                    <HomeLandingCarol />
                    */}
                    <HomeLandingSubscribe />
                    <HomeLandingIG />
                </Route>
                <Route path={"/shop"} component={Shop}/>

                <Footer />
            </Router>
        </div>
    )
};

export default App;