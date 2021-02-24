import React from "react";
import deusIcon from "../../Assets/writing/DeusIcon.svg";
import rose from "../../Assets/writing/rose.svg";
import wand from "../../Assets/writing/wand.svg";
import trail from "../../Assets/writing/trail.svg";
import Footer from "../Footer";

interface BookDisplayInfo {
  title: string;
  genre: string;
  visual: () => JSX.Element;
}

const BookDisplay = ({ title, genre, visual }: BookDisplayInfo) => {
  return (
    <div className="flex flex-col w-40 bg-blue-50 rounded-2xl p-3 m-3 shadow-md">
      <div className="w-24 h-24">{visual()}</div>
      <div className="text-xl">{title}</div>
      <div className="text-lg text-blue-500">{genre}</div>
    </div>
  );
};

const BookIcon = (icon: string) => {
  return <img alt="Book Icon" className="object-contain" src={icon} />;
};

const Writing = () => {
  return (
    <div className="w-full">
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
        <div className="text-4xl text-blue-800 my-8">Works</div>
        <div className="flex flex-row flex-wrap justify-around">
          <BookDisplay
            visual={() => BookIcon(deusIcon)}
            title="Deus Ex Machina"
            genre="Science Fiction"
          />
          <BookDisplay
            visual={() => BookIcon(rose)}
            title="Rose Thorns"
            genre="Western Fiction"
          />
          <BookDisplay
            visual={() => BookIcon(trail)}
            title="Trail of Names"
            genre="Heroic Fantasy"
          />
          <BookDisplay
            visual={() => BookIcon(wand)}
            title="The World Outside"
            genre="Harry Potter FanFiction"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
