import React from "react";
import {
  OverlayBackground,
  OverlayBackgroundInstance,
} from "../Core/OverlayTypes";

interface BackgroundInput {
  background: OverlayBackground;
  backgroundImage: string;
  backgroundVideo?: string;
  backgroundRef: React.RefObject<HTMLDivElement>;
  onBackgroundLoad: () => void;
}

const Background = ({
  background,
  backgroundImage,
  backgroundVideo,
  backgroundRef,
  onBackgroundLoad,
}: BackgroundInput) => {
  return background ? (
    <CustomBackgroundDisplay
      render={background.render}
      backgroundProps={background.backgroundProps}
      backgroundRef={backgroundRef}
      onBackgroundLoad={onBackgroundLoad}
    />
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

const CustomBackgroundDisplay = ({
  render,
  backgroundProps,
  onBackgroundLoad,
  backgroundRef,
}: OverlayBackgroundInstance) => {
  return render({ backgroundProps, onBackgroundLoad, backgroundRef });
};

export default Background;
