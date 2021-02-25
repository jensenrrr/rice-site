import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { BookInfo } from "../books";

export interface BookDisplayInfo {
  bookInfo: BookInfo;
  executeScroll: () => void;
  setSummary: Dispatch<SetStateAction<BookInfo>>;
}

const BookIcon = ({ icon }: { icon: string }) => {
  return <img alt="Book Icon" className="object-contain" src={icon} />;
};

export const BookDisplay = ({
  bookInfo,
  executeScroll,
  setSummary,
}: BookDisplayInfo) => {
  return (
    <div
      className="flex flex-col bg-white rounded-2xl p-3 m-3 shadow-md"
      onClick={() => (setSummary(bookInfo), executeScroll())}
    >
      <BookIcon icon={bookInfo.icon} />
      <div className="text-xl">{bookInfo.title}</div>
      <div className="text-lg text-blue-500">{bookInfo.genre}</div>
    </div>
  );
};

export default BookDisplay;
