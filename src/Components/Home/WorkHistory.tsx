import React from "react";
import ImageAndCaption from "../ImageAndCaption";
import ie from "./../../Assets/work/IE.png";
import pinch from "./../../Assets/work/pinch.png";
import carillon from "./../../Assets/work/carillon.png";
import { Link } from "react-router-dom";

const WorkHeader = ({ company, title, dateRange }: any) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">{company}</h2>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="font-semibold">{dateRange}</div>
    </div>
  );
};

const CarillonCaption = () => {
  return (
    <div className="flex-grow pb-5 pt-4 text-center text-lg">
      <WorkHeader
        company="Carillon Flooring Center"
        title="Web Designer/Developer"
        dateRange="March, 2018 - August, 2018"
      />
      <div>
        Designed and developed a website for a local flooring company while
        enrolled in classes at the University of Florida.
      </div>
      <div></div>
    </div>
  );
};

const InfiniteEnergyCaption = () => {
  return (
    <div className="flex-grow pb-5 pt-4 text-center text-md">
      <WorkHeader
        company="Infinite Energy"
        title="Full Stack Developer"
        dateRange="May, 2020 - January, 2021"
      />
      <div>
        Worked on a wide array of projects and technologies, from integrating
        React workflows into an old AngularJS account management web app in an
        iterative rewrite to deep diving through a .NET ecosystem to fx bugs and
        make adjustments to functionality.
      </div>
      <div>
        After only 8 months at Infinite Energy my time at the company was cut
        short by a merger with Gas South that eliminated the need for the
        Infinite Energy IT department.
      </div>
    </div>
  );
};

const PinchAPennyCaption = () => {
  return (
    <div className="flex-grow pb-5 pt-4 text-center text-lg">
      <WorkHeader
        company="Pinch A Penny"
        title="Full Stack Developer"
        dateRange="January, 2021 - Now"
      />
      <div>
        Work on our cloud based water testing system and migrating to a new POS.
      </div>
      <div></div>
    </div>
  );
};

const WorkList = [
  { title: "Pinch A Penny", img: pinch, caption: PinchAPennyCaption },
  { title: "Infinite Energy", img: ie, caption: InfiniteEnergyCaption },
  {
    title: "Carillon Flooring Center",
    img: carillon,
    caption: CarillonCaption,
  },
];

const WorkHistory = () => {
  return (
    <div className={"mx-auto"}>
      <div className="flex-1 w-full mt-10 mb-8 text-center text-3xl bold">
        <Link to="/Resume">
          <h2 className="hover:underline hover:text-blue-700">
            Work Experience
          </h2>
        </Link>
      </div>
      <div className="flex flex-col items-center w-full md:flex-row xl:w-9/12 justify-evenly mx-auto">
        {WorkList.map((job) => (
          <ImageAndCaption img={job.img} key={job.title}>
            {job.caption()}
          </ImageAndCaption>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
