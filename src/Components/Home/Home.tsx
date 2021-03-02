import React, { useEffect, useState } from "react";
import HomeComputer from "./HomeComputer";
import Welcome from "./Welcome";

const Home = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      window.innerWidth > 640 ? setMobile(false) : setMobile(true);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      {mobile ? null : <HomeComputer />}
      <Welcome />
    </div>
  );
};

export default Home;
