import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import uc from "../../Assets/projects/uc.png";
import {
  UniversityChatCaption,
  EnthuseCaption,
  RiceHubCaption,
} from "../Captions";
import ImageAndCaption from "../ImageAndCaption";

const SideSelector = ({ title, selected, i, setSelected }: any) => {
  return (
    <div
      onClick={() => setSelected(i)}
      className={classNames(
        "text-xl md:text-2xl md:w-72 rounded-lg p-3 md:p-5 md:mb-5",
        {
          "bg-gradient-to-r from-green-400 to-blue-500": selected,
          "bg-yellow-100": !selected,
        }
      )}
    >
      {title}
    </div>
  );
};
const PersonalProjectList = [
  { title: "University Chat", img: uc, caption: UniversityChatCaption },
  { title: "Enthuse", img: uc, caption: EnthuseCaption },
  { title: "Rice Hub", img: uc, caption: RiceHubCaption },
];

const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex-1 w-full mt-10 mb-8 text-center text-3xl bold">
        <Link to="/Projects">
          <h2 className="hover:underline hover:text-blue-700">
            Personal Projects
          </h2>
        </Link>
      </div>
      <div
        className={
          "flex flex-col w-full justify-evenly " +
          "flex-grow " +
          "md:flex-row md:justify-center md:space-x-20 lg:space-x-32 xl:space-x-40 2xl:space-x-48"
        }
      >
        <div className="flex flex-row md:flex-col mb-8 md:mb-0 w-full md:w-auto justify-evenly">
          {PersonalProjectList.map((project, i) => (
            <SideSelector
              title={project.title}
              i={i}
              key={i}
              classes=""
              selected={i === selectedProject}
              setSelected={setSelectedProject}
            />
          ))}
        </div>
        {
          <ImageAndCaption
            styles={{
              div: "w-80 flex flex-col h-96 mx-auto",
            }}
            img={PersonalProjectList[selectedProject].img}
          >
            {PersonalProjectList[selectedProject].caption()}
          </ImageAndCaption>
        }
      </div>
      <div style={{ flex: 1 }}></div>
    </div>
  );
};

export default PersonalProjects;
