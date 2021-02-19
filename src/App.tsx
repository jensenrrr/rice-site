import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume";
import Writing from "./Components/Writing";
import Blogs from "./Components/Blog/Blogs";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Lost from "./Components/Lost";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
        <Route path="/Blog">
          <Blogs />
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
    </BrowserRouter>
  );
}

export default App;
