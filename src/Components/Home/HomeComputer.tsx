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
        backgroundScale={{
          width: 1920,
          height: 1080,
          heightTrim: 0.14,
          cutTop: true,
          cutBottom: false,
        }}
        overlaidImages={[mail, terminal]}
      />
    </div>
  );
};

export default HomeComputer;
