import React from "react";
import { listOfBlogs } from "./BlogRegistry";
import BlogPreview from "./BlogPreview";

export const BlogHomePage = () => {
  return (
    <div>
      <div className="flex-1 w-full mt-10 mb-8 text-center text-3xl bold">
        <h2>My Blog</h2>
      </div>
      <div className="w-8/12 space-y-10 mx-auto">
        {listOfBlogs.map((previewInfo) => (
          <BlogPreview key={previewInfo.title} {...previewInfo} />
        ))}
      </div>
    </div>
  );
};
