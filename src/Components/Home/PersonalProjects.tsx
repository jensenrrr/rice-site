import classNames from "classnames";
import React, { FC, useState } from "react";
import uc from "../../Assets/uc.png";
import {
  UniversityChatCaption,
  EnthuseCaption,
  RiceHubCaption,
} from "./Captions";

interface ImageAndCaption {
  img: string;
}
const ImageAndCaption: FC<ImageAndCaption> = ({ img, children }) => {
  return (
    <div className="w-80 h-full flex flex-col ">
      <img
        src={img}
        width="230"
        className="flex-none mx-auto"
        style={{ height: "auto" }}
      />
      {children}
    </div>
  );
};
const SideSelector = ({ title, selected, i, setSelected }: any) => {
  return (
    <div
      onClick={() => setSelected(i)}
      className={classNames("text-2xl w-72 rounded-lg p-5 mb-5", {
        "bg-gradient-to-r from-green-400 to-blue-500": selected,
        "bg-yellow-100": !selected,
      })}
    >
      {title}
    </div>
  );
};
const PersonalProjectList = [
  { title: "University Chat", img: uc, caption: UniversityChatCaption },
  { title: "Enthuse", img: uc, caption: EnthuseCaption },
  { title: "Rice Hub (You're here!)", img: uc, caption: RiceHubCaption },
];

const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex-1 w-full mt-10 mb-8 text-center text-3xl bold">
        <h2>Personal Projects</h2>
      </div>
      <div className="h-96 flex flex-row flex-grow space-x-40 justify-evenly mx-auto">
        <div className="flex flex-col justify-evenly">
          {PersonalProjectList.map((project, i) => (
            <SideSelector
              title={project.title}
              i={i}
              key={i}
              selected={i === selectedProject}
              setSelected={setSelectedProject}
            />
          ))}
        </div>
        {
          <ImageAndCaption img={PersonalProjectList[selectedProject].img}>
            {PersonalProjectList[selectedProject].caption()}
          </ImageAndCaption>
        }
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default PersonalProjects;
