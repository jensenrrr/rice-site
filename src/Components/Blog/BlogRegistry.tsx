import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactFooter from "../ContactFooter";
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
    <>
      <Switch>
        <Route path="/Blog/creating-personal-website-one">
          <CreatingPersonalWebsiteOne />
        </Route>
      </Switch>
      <ContactFooter
        borderColor={"border-gray-600"}
        hoverBorderColor={"border-blue-300"}
        textColor={"text-gray-600"}
        hoverTextColor={"text-blue-400"}
        containerClasses={"mt-10 mb-10"}
        text={"Leave a Comment"}
        url={"/Contact/Comment"}
      />
    </>
  );
};

export default BlogRegistry;
