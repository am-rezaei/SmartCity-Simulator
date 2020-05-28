import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Result from "./Result";
import NewApp from "./NewApp";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/homes">
                        <NewApp />
                    </Route>
                    <Route path="/monitoring">
                        <Result />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/homes">Smart Homes</Link>
                </li>
                <li>
                    <Link to="/monitoring">Monitoring Panel</Link>
                </li>
            </ul>

            <hr />
        </div>
    );
}
