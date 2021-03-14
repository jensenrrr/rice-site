import React, { useRef, useState } from "react";
import BookDisplay from "./BookDisplay";
import { books, BookInfo } from "../books";
import Background from "../../Background";
import ContactFooter from "../../ContactFooter";
import Preview from "./Preview";

const WritingCollection = () => {
  const [summary, setSummary] = useState<BookInfo>(books["Deus"]);
  const previewRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (previewRef && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Background classes="w-full">
      <div className="flex flex-col font-serif w-full lg:w-8/12 mx-auto text-center">
        <div className="text-4xl text-blue-800 my-8">Writing Collection</div>
        <div className="text-xl px-10">
          <div className="mb-5">
            Below you can find the collection of stories I’ve written and posted
            here for reading. None of them are finished, and I haven’t posted
            every written chapter of the below works, but I hope to continue
            working on them and, eventually, publish at least one. If you have
            feedback, whether it be positive or negative, let me know!
          </div>
          <div>
            The works below contain graphic descriptions violence and may
            contain other content not suitable for the workplace. Additionally,
            the places you travel to and the characters you meet are fictious
            and views characters hold are not necessarily views I hold or
            endorse.
          </div>
        </div>
        <div className="text-4xl text-blue-800 mt-8">Library</div>
        <div className="text-xl mt-2 mb-6">
          Try clicking on the below icons!
        </div>
        <div className="flex flex-row flex-wrap justify-around">
          {Object.keys(books).map((bookName) => (
            <BookDisplay
              key={books[bookName].title}
              executeScroll={executeScroll}
              setSummary={setSummary}
              bookInfo={books[bookName]}
            />
          ))}
        </div>
        <div ref={previewRef}>
          <Preview {...summary} />
        </div>
      </div>
    </Background>
  );
};

export default WritingCollection;
