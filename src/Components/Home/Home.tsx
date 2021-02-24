import React from "react";
import HomeComputer from "./HomeComputer";
import { ReferenceQuotes } from "./ReferenceQuotes";
import PersonalProjects from "./PersonalProjects";
import WorkHistory from "./WorkHistory";
import Footer from "../Footer";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="w-full">
      <HomeComputer />
      <Welcome />
      <PersonalProjects />
      <ReferenceQuotes />
      <WorkHistory />
      <Footer />
    </div>
  );
};
export default Home;
