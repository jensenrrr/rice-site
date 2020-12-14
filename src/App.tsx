import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Resume from "./Components/Resume";
import Writing from "./Components/Writing";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Lost from "./Components/Lost";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Resume">
            <Resume />
          </Route>
          <Route exact path="/Writing">
            <Writing />
          </Route>
          <Route exact path="/Blog">
            <Blog />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route>
            <Lost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
