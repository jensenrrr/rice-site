import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  FC,
  Reducer,
} from "react";
import Background from "./Display/Background";
import {
  initOverlaidElementsState,
  overlaidElementsReducer,
} from "./Core/OverlayElementsState";
import { OverlayElements } from "./Display/DisplayOverlayElements";
import {
  DisplayOverlayInput,
  OverlaidElementData,
  OverlaidElementInput,
  ResizeAction,
} from "./Core/OverlayTypes";
import { VerticalCutOutput, getVerticalMargin } from "./Core/VerticalCrop";

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
  overlaidElements,
}: DisplayOverlayInput) => {
  const [overlaidElementsState, overlaidElementsDispatch] = useReducer<
    Reducer<readonly OverlaidElementData[], ResizeAction>,
    readonly OverlaidElementInput[]
  >(overlaidElementsReducer, overlaidElements, initOverlaidElementsState);

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

    overlaidElementsDispatch({
      verticalMargin: newVerticalMargin.topCut,
      backgroundHeight: currentBackgroundSize.height,
      backgroundWidth: currentBackgroundSize.width,
    });
  }, [
    currentBackgroundSize,
    backgroundScale,
    setVerticalMargin,
    overlaidElementsDispatch,
  ]);

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
      {OverlayElements(overlaidElementsState, globalProps)}
    </div>
  );
};

export default DisplayOverlay;
