import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { BlogPreviewInfo } from "./BlogRegistry";

const BlogPreview = ({
  category,
  title,
  summary,
  img,
  alt,
  routeName,
}: BlogPreviewInfo) => {
  let match = useRouteMatch();

  return (
    <Link to={`${match.path}/${routeName}`}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:max-w-4xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 md:h-full w-full object-cover md:w-48"
              src={img}
              alt={alt}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {category}
            </div>
            <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {title}
            </span>
            <p className="mt-2 text-gray-500">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPreview;
