import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { BlogHomePage } from "./BlogHomePage";
import BlogRegistry from "./BlogRegistry";

const Blogs = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:blogName`}>
        <BlogRegistry />
      </Route>
      <Route path={match.path}>
        <BlogHomePage />
      </Route>
    </Switch>
  );
};

export default Blogs;
