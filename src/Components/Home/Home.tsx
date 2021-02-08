import React from "react";
import HomeComputer from "./HomeComputer";
import { ReferenceQuotes } from "./ReferenceQuotes";
import PersonalProjects from "./PersonalProjects";

const Footer = () => {
  return <div className="bg-yellow-200 min-w-full h-40 mt-10"></div>;
};

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <HomeComputer />
      <PersonalProjects />
      <ReferenceQuotes />
      <Footer />
    </div>
  );
};
export default Home;
