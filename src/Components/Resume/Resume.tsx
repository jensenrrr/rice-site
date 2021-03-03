import React from "react";
import { ReferenceQuotes } from "./ReferenceQuotes";
import resumeImg from "../../Assets/work/JensenRice_Resume.jpg";
import { Link } from "react-router-dom";
import { LinkedInIcon, MailIcon } from "./ResumeIcons";
import Background from "../Background";
import ContactFooter from "../ContactFooter";

const Resume = () => {
  return (
    <Background>
      <div>
        <div className="mx-5 md:mx-0">
          <div className="text-4xl text-blue-900 pt-8 mb-4 text-center">
            Resume
          </div>
          <div className="max-w-xl mb-8 text-lg text-center mx-auto">
            <div className="text-xl mb-4 text-blue-700">About</div>
            I'm a Full Stack Developer, most comfortable with React and .NET but
            capable (and more than willing!) to learn any new technologies or
            fields with real world impact. Recent dives into personal projects
            have leveled up my Typescript and improved my understanding of MBaaS
            services (Firebase and a little bit of FaunaDB) as well as NoSQL
            databases (Firebase Realtime Database) while I've gained
            professional experience investigating and addressing data
            inconsistencies in T-SQL and in another frontend framework: Razor
            MVC.
            <div className="mt-12 flex flex-row max-w-sm mx-auto justify-around">
              <a href="https://github.com/jensenrrr" className="cursor-pointer">
                <LinkedInIcon />
              </a>
              <Link to="/Contact/Inquiry">
                <MailIcon />
              </Link>
            </div>
          </div>
        </div>
        <ReferenceQuotes />
        <div className="max-w-2xl mx-5 md:mx-auto mt-12 bg-white py-4 rounded-lg shadow-lg">
          <a href="/files/JensenRice_Resume.pdf" target="_blank">
            <img src={resumeImg} />
          </a>
        </div>
        <div className="pb-12"></div>
      </div>
      <ContactFooter
        borderColor={"border-gray-600"}
        hoverBorderColor={"border-blue-300"}
        textColor={"text-gray-600"}
        hoverTextColor={"text-blue-400"}
        containerClasses={"mb-10"}
        text={"Get In Touch"}
        url={"/Contact"}
      />
    </Background>
  );
};

export default Resume;
