import React, { useState } from "react";
import classNames from "classnames";
import {
  UniversityChatCaption,
  EnthuseCaption,
  RiceHubCaption,
} from "../Captions";
import uc from "../../Assets/projects/uc.png";
import prototype from "../../Assets/projects/ucPrototype.png";
import enthuseHomepage from "../../Assets/projects/EnthuseHomepage.png";
import ImageAndCaption from "../ImageAndCaption";
import CreatingPersonalWebsiteOne from "../Blog/BlogRepository/PersonalWebsiteOne";
import Background from "../Background";

const TopSelector = ({ title, selected, i, setSelected }: any) => {
  return (
    <div
      onClick={() => setSelected(i)}
      className={classNames(
        "cursor pointer text-xl md:text-2xl rounded-lg p-3 md:p-5 mb-5",
        {
          "bg-gradient-to-r from-green-400 to-blue-500": selected,
          "bg-yellow-100 shadow-md": !selected,
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

const UniversityChat = () => {
  return (
    <div className="text-lg max-w-3xl mx-4 md:mx-auto">
      <div className="text-3xl mb-8 text-center">University Chat</div>
      <div className="flex flex-col md:flex-row-reverse mx-auto ">
        <ImageAndCaption
          styles={{
            div: "mx-auto md:mx-0 md:w-6/12 h-96",
            img: "flex-none mb-4 mx-auto",
          }}
          img={uc}
        >
          <UniversityChatCaption />
        </ImageAndCaption>
        <div className="mb-8 md:mb-0 md:mr-5 md:w-5/12">
          <span className="ml-5">University Chat </span>is a mobile messaging
          application for University students. While course group chats are
          popular, joining them is awkward and sometimes difficult. Instead of
          making users create course group chats, University Chat creates a
          group chat for each course that a university offers. All a user has to
          do to join is search up their course name or code in University Chat's
          course search and hit join!
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mb-12 mx-auto">
        <img className="mb-6 md:mb-0 h-80 mx-auto" src={prototype} />
        <div className="md:w-8/12 flex items-center">
          University Chat started as a school project for Human-Computer
          Interaction at the University of Florida. We had a team of four
          working to develop it. Since I had experience with React from Enthuse
          I pushed for using React Native for University Chat and implemented
          the chat functionality and navigation as well as integrating my
          teammates work into the application. You can see a blurry screenshot
          of the prototype to the side (or on mobile!), it's functional but
          missing a lot of bells and whistles!
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="font-bold"> Current State </div>
        <div className="mb-5">
          <span className="text-green-600">In Progress </span>
        </div>
        <div>
          If you were to look at the University Chat GitHub repository, you'd
          see a few commits made at the end of 2020. I was looking at rewriting
          the existing codebase to improve University Chat to a point where I
          would feel comfortable releasing it. After some time trying to clean
          up the code, which I realized was abhorrent as soon as I saw it again,
          and rethinking the University Chat design, I realized that if I want
          my vision of University Chat to come to reality, I was going to have
          to start from square one. The redesign has been (mostly) complete
          since the end of 2020 and I've started to develop the revised
          University Chat project. However, since I hope to launch University
          Chat in a few years the code isn't publically available.
        </div>
      </div>
    </div>
  );
};

/*
Enthuse idea on homepage 
From {hobby1} to {hobby2}.
hobbies are in bold and change every x seconds with animation to match
from knitting scarves to freediving in the Gulf, 
*/
const Enthuse = () => {
  return (
    <div className="text-lg max-w-3xl mx-auto">
      <div className="text-3xl mb-8 text-center">Enthuse</div>
      <img src={enthuseHomepage} />
      <div className="space-y-8">
        <div className="mt-8">
          At first glance, Enthuse is just another wave in the ocean of social
          media apps. However, Enthuse is built around a core idea of connecting
          people through their passions, and this shows at a closer look.
          Enthuse realizes that whether our passion be knitting scarves or rock
          climbing, hobbies are a core part of our lives and has a unique
          structure to deepen existing communities and create new ones.
        </div>
        <div>
          Enthuse looks at passions as a pair of{" "}
          <span className="font-bold">Location</span> and{" "}
          <span className="font-bold">Hobby</span>.
        </div>
        <div>
          Our passsions are influenced by where we live, a fisherman in the Gulf
          of Mexico cares little for a stranger's catch off the coast of
          California and a volleyball player enduring the Michigan winter will
          only get jealous seeing news about beach volleyball tournaments in
          Florida. Any it's more than that, connecting with similiarly
          immpassioned people in the local area creates more impactful
          relationships and helps develop the hobby's community.
        </div>
        <div>
          The Hobby side of the pair is self-explanatory, but it's more than it
          seems. Yes, Video Games is a hobby, but it's not as simple as that.
          Under Video Games are types of video games (e.g. Fighting Games), and
          under each type of video game there is a game or series of games (e.g.
          Super Smash Bros.), and each game in the series (e.g. Melee or
          Ultimate) is a tight knight community with their own identity.
        </div>
        <div>
          Combining specific locations and hobbies creates pairs tailored to
          small communities, but each of these small communities are part of
          larger communities. Alachua County / Super Smash Bros. Melee is a
          community of Melee players that have tournaments and contasntly
          interact with each other, but it's not an isolated community. They are
          all part of the Florida / Super Smash Bros. Melee community and the
          Florida / Super Smash Bros. community. Enthuse uses this to connect
          communities together while ensuring that users see the content that is
          the most important to them.
        </div>
        <div className="mt-10 text-center">
          <div className="font-bold"> Current State </div>
          <div className="mb-5">
            <span className="text-red-600">On Hold</span>
          </div>
          <div>
            I'm passionate about Enthuse. I started it as a junior at the
            University of Florida (PLEASE DON'T LOOK AT THE CODE) and it was a
            formative experience as a software engineer; programming basics
            aside, I learned more banging my head against the computer while
            working on Enthuse than I had in my all classes combined. I had a
            functioning prototype of Enthuse before I listed it for my senior
            project, but that semester showed just how much work would be needed
            to turn it into a professional and clean application.
            <br />
            <br />I hope, and even plan, to return to Enthuse someday, but there
            is so only so much time in a day and bringing University Chat to a
            level of UI and functionality to where I would feel comfortable
            publishing it is a much more manageable task.
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalWebsite = () => {
  return (
    <div className="text-lg max-w-3xl mx-auto">
      <div>
        First Blog post in a series detailing this website's construction.
      </div>
      <CreatingPersonalWebsiteOne />
    </div>
  );
};

const Projects = () => {
  const [project, setProject] = useState(0);
  return (
    <Background>
      <div className="text-4xl text-center py-10">Projects</div>
      <div className="flex space-x-5 md:space-x-10 mx-auto justify-center max-w-4xl">
        {PersonalProjectList.map((p, i) => (
          <TopSelector
            i={i}
            selected={i === project}
            setSelected={setProject}
            title={p.title}
            key={p.title}
          />
        ))}
      </div>
      <div className="pb-32">
        {project === 0 ? (
          <UniversityChat />
        ) : project === 1 ? (
          <Enthuse />
        ) : project === 2 ? (
          <PersonalWebsite />
        ) : null}
      </div>
    </Background>
  );
};

export default Projects;
