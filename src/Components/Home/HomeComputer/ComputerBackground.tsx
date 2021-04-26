import React from "react";
import ReactPlayer from "react-player";
import { OverlayBackgroundRenderProps } from "react-display-overlay";

const vid = "videos/SandbookHighBitRate.mp4";

const sandbookBackground = {
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

export default sandbookBackground;
