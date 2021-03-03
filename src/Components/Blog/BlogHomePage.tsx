import React from "react";
import { listOfBlogs } from "./BlogRegistry";
import BlogPreview from "./BlogPreview";
import ContactFooter from "../ContactFooter";
import Background from "../Background";

export const BlogHomePage = () => {
  return (
    <Background>
      <div className="flex-1 w-full pt-10 mb-8 text-center text-3xl bold">
        <h2>My Blog</h2>
      </div>
      <div className="w-8/12 space-y-10 mx-auto">
        {listOfBlogs.map((previewInfo) => (
          <BlogPreview key={previewInfo.title} {...previewInfo} />
        ))}
      </div>
      <ContactFooter
        borderColor={"border-gray-600"}
        hoverBorderColor={"border-blue-300"}
        textColor={"text-gray-600"}
        hoverTextColor={"text-blue-400"}
        containerClasses={"mt-10 mb-10"}
        text={"Leave a Comment"}
        url={"/Contact/Comment"}
      />
    </Background>
  );
};
