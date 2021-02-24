import React from "react";
import { Route, Switch } from "react-router-dom";
import CreatingPersonalWebsiteOne, {
  CreatingPersonalWebsiteOneDetails,
} from "./BlogRepository/PersonalWebsiteOne";

export interface BlogPreviewInfo {
  category: string;
  title: string;
  summary: string;
  img: string;
  alt: string;
  routeName: string;
  date: string;
}

export const listOfBlogs: BlogPreviewInfo[] = [
  CreatingPersonalWebsiteOneDetails,
];

const BlogRegistry = () => {
  return (
    <Switch>
      <Route path="/Blog/creating-personal-website-one">
        <CreatingPersonalWebsiteOne />
      </Route>
    </Switch>
  );
};

export default BlogRegistry;
