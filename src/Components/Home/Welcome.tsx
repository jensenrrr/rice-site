import React from "react";
import { Link } from "react-router-dom";
import profile from "../../Assets/mdFace.png";
import "./custom.css";

const Welcome = () => {
  return (
    <div className="bg-black pt-12 pb-16">
      <div className="flex flex-col text-white text-center">
        <div className="text-lg">Jensen Rice</div>
        <div className="text-4xl font-mono">Hello World.</div>
      </div>
      <div className="flex flex-col md:flex-row w-9/12 max-w-2xl mx-auto mt-6 bg-white overflow-hidden rounded-xl shadow-md">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 sm:h-64 w-full md:h-full md:w-48 shift-40-x object-cover"
            alt="Jensen Rice at the beach"
            src={profile}
          />
        </div>
        <div className="flex flex-col p-5 text text-center text-xl">
          <div className="text-2xl font-medium mb-3">About</div>
          <div className="mb-3 ">
            I'm a Full-Stack developer with a passion for modern frontend
            frameworks (React!) and solutions with real world impact. In my free
            time (when I'm not snowboarding, rock climbing, or diving the Gulf
            of Mexico), I work on a few personal projects that you can check out{" "}
            <Link className="underline hover:text-blue-500" to="/Projects">
              here
            </Link>{" "}
            and on a collection of fantasy and science fiction works you can
            read{" "}
            <Link className="underline hover:text-blue-500" to="/Writing">
              here
            </Link>{" "}
            .
          </div>
          <div>
            If you're looking for a more detailed look at my software
            development skills and experience, you can check out my resume page{" "}
            <Link className="underline hover:text-blue-500" to="/Writing">
              here
            </Link>{" "}
            .
          </div>
        </div>
      </div>
      {/* Github Linkdin Blog links */}
    </div>
  );
};

export default Welcome;