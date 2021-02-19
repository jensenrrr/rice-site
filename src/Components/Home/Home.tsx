import React from "react";
import HomeComputer from "./HomeComputer";
import { ReferenceQuotes } from "./ReferenceQuotes";
import PersonalProjects from "./PersonalProjects";
import WorkHistory from "./WorkHistory";

const Footer = () => {
  return <div className="bg-yellow-200 min-w-full h-40 mt-10"></div>;
};

const Home = () => {
  return (
    <div className="w-full">
      <HomeComputer />
      <PersonalProjects />
      <ReferenceQuotes />
      <WorkHistory />
      <Footer />
    </div>
  );
};
export default Home;
