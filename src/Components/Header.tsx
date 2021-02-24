import React from "react";
import { Link, useLocation } from "react-router-dom";
import waves from "../Assets/waveHeader.png";

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
    <div
      style={{ backgroundImage: `url(${waves})`, backgroundRepeat: "repeat" }}
      className="h-10 flex flex-row w-full justify-start"
    >
      <HeaderLink to="/" classes="font-semibold h-full px-5" title="Home" />
      <HeaderLink to="/Blog" classes="font-semibold h-full px-5" title="Blog" />
      <HeaderLink
        to="/Writing"
        classes="font-semibold h-full px-5"
        title="Writing"
      />
      <HeaderLink
        to="/Projects"
        classes="font-semibold h-full px-5"
        title="Projects"
      />
      <HeaderLink
        to="/Resume"
        classes="font-semibold h-full px-5"
        title="Resume"
      />
      <HeaderLink
        to="/Contact"
        classes="font-semibold h-full px-5"
        title="Contact"
      />
    </div>
  ) : null;
};

export default Header;
