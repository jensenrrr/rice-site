import React, { Dispatch, SetStateAction, useState } from "react";
import { BookShelfIcon } from "../BookIcons";
import { BookInfo } from "../books";

export interface BookDisplayInfo {
  bookInfo: BookInfo;
  executeScroll: () => void;
  setSummary: Dispatch<SetStateAction<BookInfo>>;
}

export const BookDisplay = ({
  bookInfo,
  executeScroll,
  setSummary,
}: BookDisplayInfo) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col space-y-2 h-64 w-56 cursor-pointer bg-white rounded-2xl p-3 m-3 shadow-md"
      onClick={() => {
        setSummary(bookInfo);
        executeScroll();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-4/6 mx-auto">
        <BookShelfIcon name={bookInfo.name} height={144} hover={hover} />
      </div>
      <div>
        <div className="text-xl">{bookInfo.title}</div>
        <div className="text-lg text-blue-500">{bookInfo.genre}</div>
      </div>
    </div>
  );
};

export default BookDisplay;
