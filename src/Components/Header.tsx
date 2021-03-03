import React from "react";
import { Link, useLocation } from "react-router-dom";
import waves from "../Assets/waveHeader.png";

const HeaderLink = ({ to, classes, title }: any) => {
  return (
    <Link to={to}>
      <div
        style={{ marginTop: "1px" }}
        className={classes + "  sm:text-lg md:text-xl hover:text-blue-500"}
      >
        {title}
      </div>
    </Link>
  );
};

const Header = () => {
  let location = useLocation();

  return location.pathname !== "/" ? (
    <div
      style={{ backgroundImage: `url(${waves})`, backgroundRepeat: "repeat" }}
      className="h-9 w-full"
    >
      <div className="flex flex-row justify-evenly lg:mx-10 lg:justify-start lg:space-x-12">
        <HeaderLink to="/" classes="font-semibold h-full" title="Home" />
        <HeaderLink to="/Blog" classes="font-semibold h-full" title="Blog" />
        <HeaderLink
          to="/Writing"
          classes="font-semibold h-full"
          title="Writing"
        />
        <HeaderLink
          to="/Projects"
          classes="font-semibold h-full"
          title="Projects"
        />
        <HeaderLink
          to="/Resume"
          classes="font-semibold h-full"
          title="Resume"
        />
        <HeaderLink
          to="/Contact"
          classes="font-semibold h-full"
          title="Contact"
        />
      </div>
    </div>
  ) : null;
};

export default Header;
