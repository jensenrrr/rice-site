import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  FC,
  Reducer,
} from "react";
import Background from "./Background";
import { initImageState, overlaidImagesReducer } from "./DisplayOverlayLogic";
import { OverlayImages } from "./OverlayImage";
import {
  DisplayOverlayInput,
  OverlaidImageData,
  OverlaidImageInput,
  ResizeAction,
} from "./OverlayTypes";
import { VerticalCutOutput, getVerticalMargin } from "./VerticalCrop";

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
  globalProps,
  overlaidImages,
}: DisplayOverlayInput) => {
  const [overlaidImagesState, overlaidImagesDispatch] = useReducer<
    Reducer<readonly OverlaidImageData[], ResizeAction>,
    readonly OverlaidImageInput[]
  >(overlaidImagesReducer, overlaidImages, initImageState);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const [currentBackgroundSize, setCurrentBackgroundSize] = useState({
    width: 0,
    height: 0,
  });

  const [verticalMargin, setVerticalMargin] = useState<VerticalCutOutput>({
    topCut: 0,
    styles: {},
  });

  function resizedBackground() {
    if (backgroundRef && backgroundRef.current) {
      setCurrentBackgroundSize({
        height:
          backgroundRef.current.offsetWidth *
          (backgroundScale.height && backgroundScale.width
            ? backgroundScale.height / backgroundScale.width
            : 1),
        width: backgroundRef.current.offsetWidth,
      });
    }
  }
  const onBackgroundLoad = () => {
    resizedBackground();
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
    window.addEventListener("resize", resizedBackground);
    return () => window.removeEventListener("resize", resizedBackground);
  });

  return (
    <div style={verticalMargin.styles}>
      <Background
        backgroundImage={backgroundImage}
        backgroundVideo={backgroundVideo}
        backgroundRef={backgroundRef}
        onBackgroundLoad={onBackgroundLoad}
      />
      {OverlayImages(overlaidImagesState, globalProps)}
    </div>
  );
};

export default DisplayOverlay;
