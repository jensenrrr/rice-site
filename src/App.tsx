import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import Writing from "./Components/Writing/Writing";
import Blogs from "./Components/Blog/Blogs";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Lost from "./Components/Lost";
import Header from "./Components/Header";
import ScrollToTop from "./Tools/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route path="/Writing">
          <Writing />
        </Route>
        <Route path="/Blog">
          <Blogs />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route path="/Contact">
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
