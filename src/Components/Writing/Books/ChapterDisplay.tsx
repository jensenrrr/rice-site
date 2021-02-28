import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { books } from "../books";
import "./books.css";

const ChapterNavigationButton = ({
  book,
  chapter,
  text,
}: {
  book: string;
  chapter: number;
  text: string;
}) => (
  <Link to={`/Writing/${book}/${chapter}`}>
    <div className="flex-shrink-0 bg-blue-500 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
      {text}
    </div>
  </Link>
);

const ChapterDisplay = () => {
  let { book, chapter }: { book: string; chapter?: string } = useParams();
  let chapterNum = chapter ? parseInt(chapter) - 1 : -1;

  if (!books[book]) {
    return <Redirect to="/Writing" />;
  }
  if (chapterNum > books[book].chapters.length || chapterNum < 0) {
    return <Redirect to={`/Writing/${book}/1`} />;
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }} className="w-full">
      <div className="max-w-2xl mx-auto px-5 pt-10">
        <div
          className={`text-center text-4xl ${
            books[book].titleClasses ? books[book].titleClasses : ""
          }`}
        >
          {books[book].title}
        </div>
        <div className="text-center mt-2 mb-8">Chapter {chapterNum + 1}</div>
        <div className="max-w-2xl flex justify-between">
          {chapterNum > 0 ? (
            <ChapterNavigationButton
              book={book}
              chapter={chapterNum}
              text="Previous Chapter"
            />
          ) : (
            <div></div>
          )}
          <div>
            {chapterNum < books[book].chapters.length - 1 ? (
              <ChapterNavigationButton
                book={book}
                chapter={chapterNum + 2}
                text="Next Chapter"
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="book">{books[book].chapters[chapterNum]}</div>
      </div>
    </div>
  );
};

export default ChapterDisplay;
