import React, { useState } from "react";
import pic from "../../../Assets/HomeComputerCropped.jpg";
import DisplayOverlay from "../../../Tools/DisplayOverlay/DisplayOverlay";
import {
  OverlaidElementInput,
  OverlayBackgroundRenderProps,
} from "../../../Tools/DisplayOverlay/Core/OverlayTypes";
import sandbookOverlaidImages from "./OverlayImagesInput";
import ReactPlayer from "react-player";

const vid = "videos/SandbookHighBitRate.mp4";

const background = {
  render: ({
    backgroundRef,
    onBackgroundLoad,
    backgroundProps,
  }: OverlayBackgroundRenderProps) => (
    <div
      ref={backgroundRef}
      style={{ position: "relative", paddingTop: "56.25%", maxHeight: "2000" }}
    >
      <ReactPlayer
        url={vid}
        muted
        playing
        loop
        onStart={onBackgroundLoad}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  ),
};

const HomeComputer = () => {
  const [hovered, setHovered] = useState("");
  const overlaidImages: OverlaidElementInput[] = sandbookOverlaidImages(
    hovered,
    setHovered
  );

  const onLoad = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div>
      <DisplayOverlay
        background={background}
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
        onLoad={onLoad}
      />
    </div>
  );
};

export default HomeComputer;
