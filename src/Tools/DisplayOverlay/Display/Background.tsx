import React from "react";
import ReactPlayer from "react-player";

interface BackgroundInput {
  backgroundImage: string;
  backgroundVideo?: string;
  backgroundRef: React.RefObject<HTMLDivElement>;
  onBackgroundLoad: () => void;
}

const Background = ({
  backgroundImage,
  backgroundVideo,
  backgroundRef,
  onBackgroundLoad,
}: BackgroundInput) => {
  return backgroundVideo ? (
    <div
      ref={backgroundRef}
      style={{ position: "relative", paddingTop: "56.25%", maxHeight: "2000" }}
    >
      <ReactPlayer
        url={backgroundVideo}
        muted
        playing
        loop
        onStart={onBackgroundLoad}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  ) : (
    <div ref={backgroundRef}>
      <img
        src={backgroundImage}
        onLoad={onBackgroundLoad}
        style={{ position: "relative", width: "100%" }}
        alt={"Well this doesn't look too good."}
      />
    </div>
  );
};

export default Background;
