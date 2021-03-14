import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChapterDisplay from "./Books/ChapterDisplay";
import WritingCollection from "./Home/WritingCollection";
import ReviewFooter from "./ReviewFooter";

const Writing = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}/:book/:chapter?`}>
          <ChapterDisplay />
        </Route>
        <Route>
          <WritingCollection />
        </Route>
      </Switch>
      <ReviewFooter />
    </>
  );
};
export default Writing;
