import { relative } from "path";
import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  FC,
  Reducer,
} from "react";
import ReactPlayer from "react-player";
import { initImageState, overlaidImagesReducer } from "./DisplayOverlayLogic";
import { OverlayImages } from "./OverlayImage";
import {
  DisplayOverlayInput,
  OverlaidImageData,
  OverlaidImageInput,
  ResizeAction,
} from "./OverlayTypes";

interface BackgroundInput {
  backgroundImage: string;
  backgroundVideo: string;
  onBackgroundLoad: () => void;
}
const Background = ({
  backgroundImage,
  backgroundVideo,
  onBackgroundLoad,
}: BackgroundInput) => {
  return backgroundVideo ? (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={"videos/SandbookHighBitRate.mp4"}
        muted
        playing
        loop
        width="100%"
        height="100%"
        onStart={onBackgroundLoad}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  ) : (
    <img
      src={backgroundImage}
      onLoad={onBackgroundLoad}
      style={{ position: "relative", width: "100%" }}
      alt={"Well this doesn't look too good."}
    />
  );
};

const DisplayOverlay: FC<DisplayOverlayInput> = ({
  backgroundImage,
  backgroundVideo,
  backgroundSize = { width: true, scale: 100 },
  overlaidImages,
}: DisplayOverlayInput) => {
  const [overlaidImagesState, overlaidImagesDispatch] = useReducer<
    Reducer<readonly OverlaidImageData[], ResizeAction>,
    readonly OverlaidImageInput[]
  >(overlaidImagesReducer, overlaidImages, initImageState);

  const [currentBackgroundSize, setCurrentBackgroundSize] = useState({
    width: 0,
    height: 0,
  });

  const onBackgroundLoad = () => {
    setCurrentBackgroundSize({
      height: window.innerWidth * 0.5625, // 1080 / 1920
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    overlaidImagesDispatch({
      backgroundHeight: currentBackgroundSize.height,
      backgroundWidth: currentBackgroundSize.width,
    });
  }, [currentBackgroundSize, overlaidImagesDispatch]);

  useEffect(() => {
    function resizedBackground() {
      setCurrentBackgroundSize({
        height: window.innerWidth * 0.5625, // 1080 / 1920
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", resizedBackground);
    return () => window.removeEventListener("resize", resizedBackground);
  });

  return (
    <div>
      <Background
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        onBackgroundLoad={onBackgroundLoad}
      />
      {OverlayImages(overlaidImagesState)}
    </div>
  );
};

export default DisplayOverlay;
