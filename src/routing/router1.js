import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";
import Altkom from "./altkom";
import Home1 from "./home1";


export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/altkom">altkom</Link>
                    </li>
                    <li>
                        <Link to="/home1">Home1</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/altkom">
                        <Altkom/>
                    </Route>
                    <Route exact path="/home1">
                        <Home1/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

