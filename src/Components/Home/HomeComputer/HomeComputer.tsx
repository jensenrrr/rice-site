import React, { useState } from "react";
import pic from "../../../Assets/HomeComputerCropped.jpg";
import DisplayOverlay from "../../../Tools/DisplayOverlay/DisplayOverlay";
import { OverlaidElementInput } from "../../../Tools/DisplayOverlay/Core/OverlayTypes";
import sandbookOverlaidImages from "./OverlayImagesInput";

const vid = "videos/SandbookHighBitRate.mp4";

const HomeComputer = () => {
  const [hovered, setHovered] = useState("");
  const overlaidImages: OverlaidElementInput[] = sandbookOverlaidImages(
    hovered,
    setHovered
  );
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
        globalProps={{
          hovered: hovered,
        }}
        overlaidElements={overlaidImages}
      />
    </div>
  );
};

export default HomeComputer;
