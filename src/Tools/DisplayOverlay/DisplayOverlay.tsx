import React, {
  useState,
  useRef,
  useReducer,
  useEffect,
  FC,
  Reducer,
} from "react";
import { initImageState, overlaidImagesReducer } from "./DisplayOverlayLogic";
import { OverlayImages } from "./OverlayImage";
import {
  DisplayOverlayInput,
  OverlaidImageData,
  OverlaidImageInput,
  ResizeAction,
} from "./OverlayTypes";

const DisplayOverlay: FC<DisplayOverlayInput> = ({
  backgroundImage,
  backgroundSize = { width: true, scale: 100 },
  overlaidImages,
}: DisplayOverlayInput) => {
  const backgroundRef = useRef<HTMLImageElement>(null);

  const [overlaidImagesState, overlaidImagesDispatch] = useReducer<
    Reducer<readonly OverlaidImageData[], ResizeAction>,
    readonly OverlaidImageInput[]
  >(overlaidImagesReducer, overlaidImages, initImageState);

  const [currentBackgroundSize, setCurrentBackgroundSize] = useState({
    width: 0,
    height: 0,
  });

  const onBackgroundLoad = ({ target: { offsetHeight, offsetWidth } }: any) => {
    setCurrentBackgroundSize({
      height: offsetHeight,
      width: offsetWidth,
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
      if (backgroundRef !== null && backgroundRef.current !== null) {
        setCurrentBackgroundSize({
          width: backgroundRef.current.clientWidth,
          height: backgroundRef.current.clientHeight,
        });
      }
    }
    window.addEventListener("resize", resizedBackground);
    return () => window.removeEventListener("resize", resizedBackground);
  });

  return (
    <div>
      <img
        src={backgroundImage}
        ref={backgroundRef}
        onLoad={onBackgroundLoad}
        style={{ position: "relative", width: "100%" }}
        alt={"Well this doesn't look too good."}
      />
      {OverlayImages(overlaidImagesState)}
    </div>
  );
};

export default DisplayOverlay;
