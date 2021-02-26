import React from "react";
import HomeComputer from "./HomeComputer";
import { ReferenceQuotes } from "./ReferenceQuotes";
import WorkHistory from "./WorkHistory";
import Footer from "../Footer";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div className="w-full">
      <HomeComputer />
      <Welcome />
      <ReferenceQuotes />
      <WorkHistory />
      <Footer />
    </div>
  );
};
export default Home;
