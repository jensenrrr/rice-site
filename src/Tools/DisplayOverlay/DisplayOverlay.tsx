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
import { VerticalCutOutput, getVerticalMargin } from "./VerticalCrop";

interface BackgroundInput {
  backgroundImage: string;
  backgroundVideo?: string;
  onBackgroundLoad: () => void;
}
const Background = ({
  backgroundImage,
  backgroundVideo,
  onBackgroundLoad,
}: BackgroundInput) => {
  return backgroundVideo ? (
    <div
      style={{ position: "relative", paddingTop: "56.25%", maxHeight: "2000" }}
    >
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
  backgroundScale = {
    width: 1920,
    height: 1080,
    heightTrim: 0,
    cutTop: false,
    cutBottom: false,
  },
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

  const [verticalMargin, setVerticalMargin] = useState<VerticalCutOutput>({
    topCut: 0,
    styles: {},
  });

  const onBackgroundLoad = () => {
    setCurrentBackgroundSize({
      height:
        window.innerWidth *
        (backgroundScale.height && backgroundScale.width
          ? backgroundScale.height / backgroundScale.width
          : 1),
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    const newVerticalMargin = getVerticalMargin({
      cutTop: backgroundScale.cutTop,
      cutBottom: backgroundScale.cutBottom,
      maxHeightCutOff: backgroundScale.heightTrim,
      backgroundHeight: currentBackgroundSize.height,
      windowHeight: window.innerHeight,
    });

    setVerticalMargin(newVerticalMargin);

    overlaidImagesDispatch({
      verticalMargin: newVerticalMargin.topCut,
      backgroundHeight: currentBackgroundSize.height,
      backgroundWidth: currentBackgroundSize.width,
    });
  }, [currentBackgroundSize, setVerticalMargin, overlaidImagesDispatch]);

  useEffect(() => {
    function resizedBackground() {
      setCurrentBackgroundSize({
        height:
          window.innerWidth *
          (backgroundScale.height && backgroundScale.width
            ? backgroundScale.height / backgroundScale.width
            : 1),
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", resizedBackground);
    return () => window.removeEventListener("resize", resizedBackground);
  });

  return (
    <div style={verticalMargin.styles}>
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
