import React from "react";

export const UniversityChatCaption = () => {
  return (
    <div className="flex-grow flex flex-col text-lg justify-center space-y-2">
      <div className="w-full text-left">{`"The course group chat? Where?"`}</div>
      <div className="w-full text-right">- Confused Student</div>
      <div className="w-full text-left">
        {`"`}On <span className="font-semibold">University Chat</span>, of
        course.
        {`"`}
      </div>
      <div className="w-full text-right">- No one... yet</div>
    </div>
  );
};

export const EnthuseCaption = () => {
  return (
    <div className="flex-grow flex flex-col pb-5 pt-4 text-center text-lg">
      <div className="w-full mb-3">
        Hobbies are at the core of{" "}
        <span className="font-semibold">Enthuse</span>.
      </div>
      <div className="w-full">
        Get away the clutter, politics, and clickbait of traditional social
        media and connect with the people who love what you love.
      </div>
    </div>
  );
};

const Hyperlink = ({ text, link }: any) => {
  return (
    <a className="underline text-blue-400 hover:text-yellow-200" href={link}>
      {text}
    </a>
  );
};

export const RiceHubCaption = () => {
  return (
    <div className="flex-grow pb-5 pt-4 text-center text-lg">
      Built using React and TypeScript, check out the{" "}
      <span className="font-semibold">RiceHub</span>{" "}
      <Hyperlink text="GitHub Repository" link="" /> or my blog post on this
      website's creation (from sand computer to an interactive front-end design){" "}
      <Hyperlink text={"here"} link={""} />.
    </div>
  );
};
