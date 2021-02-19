import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ to, classes, title }: any) => {
  return (
    <Link to={to}>
      <div className={classes}>{title}</div>
    </Link>
  );
};
const Header = () => {
  let location = useLocation();

  return location.pathname !== "/" ? (
    <div className="h-12 flex flex-row w-full justify-start bg-blue-50">
      <HeaderLink
        to="/"
        classes="bg-blue-100 font-semibold h-full px-5"
        title="Home"
      />
      <HeaderLink
        to="/Blog"
        classes="bg-blue-200 font-semibold h-full px-5"
        title="Blog"
      />
      <HeaderLink
        to="/Writing"
        classes="bg-blue-300 font-semibold h-full px-5"
        title="Writing"
      />
      <HeaderLink
        to="/Project"
        classes="bg-blue-400 font-semibold h-full px-5"
        title="Project"
      />
      <HeaderLink
        to="/Resume"
        classes="bg-blue-500 font-semibold h-full px-5"
        title="Resume"
      />
      <HeaderLink
        to="/Contact"
        classes="bg-blue-600 font-semibold h-full px-5"
        title="Contact"
      />
    </div>
  ) : null;
};

export default Header;
