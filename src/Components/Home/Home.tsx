import React, { useEffect, useState } from "react";
import HomeComputer from "./HomeComputer/HomeComputer";
import Welcome from "./Welcome/Welcome";

const Home = () => {
  const [mobile, setMobile] = useState(window.innerWidth > 640 ? false : true);

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 640 ? setMobile(false) : setMobile(true);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-black">
      {mobile ? null : <HomeComputer />}
      <Welcome />
    </div>
  );
};

export default Home;
