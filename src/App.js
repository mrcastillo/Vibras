import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navi from "./components/Navi";
import HomeLanding from "./components/HomeLanding";
import HomeLandingCarol from "./components/HomeLandingCarol";
import HomeLandingInventory from "./components/HomeLandingInventory";
import HomeLandingAbout from "./components/HomeLandingAbout";

import Shop from "./components/Shop";

import Footer from "./components/Footer";

const App = () => {
    return(
        <div className={"app-container"}>
            <Router>
                <Navi/>

                <Route exact path={"/"}>
                    <HomeLanding />
                    <div className={"homelanding-break"}></div>
                    <HomeLandingInventory />
                    {/* 
                    <div className={"homelanding-break"}></div>
                    <HomeLandingCarol />
                    */}
                    <div className={"homelanding-break"}></div>
                    <HomeLandingAbout />
                </Route>
                
                <Route path={"/shop"}>
                    <Shop />
                </Route>
                
                <div className={"homelanding-break"}></div>
                <Footer />
            </Router>
        </div>
    )
};

export default App;