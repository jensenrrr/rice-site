import React from "react";
import pic from "../../Assets/HomeComputerCropped.jpg";
import DisplayOverlay from "../../Tools/DisplayOverlay/DisplayOverlay";
import { mail, terminal } from "./OverlayImagesInput";

const vid = "videos/SandbookHighBitRate.mp4";

const HomeComputer = () => {
  return (
    <div>
      <DisplayOverlay
        backgroundImage={pic}
        backgroundVideo={vid}
        backgroundSize={{ width: true, scale: 100 }}
        overlaidImages={[mail, terminal]}
      />
    </div>
  );
};

export default HomeComputer;
