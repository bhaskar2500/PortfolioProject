
import React from "react";
// import Home from './components/Home/Home';
import { Route, HashRouter } from "react-router-dom";
import Projects from './components/Projects/Projects';
import Artwork from './components/Artwork/Artwork';
import Documentation from './components/Documentation/Documentation';
import Resume from './components/Resume/Resume';

// import { NavigationBar } from "./components/NavigationBar/NavigationBar";

export const Routes = () => {
    return (
        <div>
            <HashRouter>
                <Route exact path="/" component={Artwork} />
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/Home" component={Home} /> */}
                <Route exact path="/Resume" component={Resume} />
                <Route  exact path="/Projects" component={Projects} />
                <Route exact path="/Artwork" component={Artwork} />
                <Route exact path="/Documentation" component={Documentation} />
                {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
            </HashRouter>
        </div>
    );
};
