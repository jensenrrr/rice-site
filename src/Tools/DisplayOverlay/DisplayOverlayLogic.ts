import { CSSProperties } from "react";
import {
  AbsolutePositionAndSize,
  OverlaidImageData,
  OverlaidImageInput,
  RelativePositionAndSize,
  ResizeAction,
} from "./OverlayTypes";

export const formatToPixels = (pos: number) => {
  return `${Math.round(pos).toString()}px`;
};
export const determineAbsolutePosition = (
  size: ResizeAction,
  relativePositionAndSize: RelativePositionAndSize
): AbsolutePositionAndSize => ({
  top: size.backgroundHeight * relativePositionAndSize.yRelative,
  left: size.backgroundWidth * relativePositionAndSize.xRelative,
  width: size.backgroundWidth * relativePositionAndSize.widthScale,
  height: size.backgroundHeight * relativePositionAndSize.heightScale,
});

export const overlaidImagesReducer = (
  state: readonly OverlaidImageData[],
  action: ResizeAction
): readonly OverlaidImageData[] => {
  let newState: OverlaidImageData[] = [];

  state.forEach((overlayImage) => {
    newState.push({
      render: overlayImage.render,
      imgProps: overlayImage.imgProps,
      relativePositionAndSize: overlayImage.relativePositionAndSize,
      absolutePositionAndSize: determineAbsolutePosition(
        action,
        overlayImage.relativePositionAndSize
      ),
    });
  });
  return newState;
};

const initialAbsolute: AbsolutePositionAndSize = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};
export const initImageState = (
  imagesInfo: readonly OverlaidImageInput[]
): OverlaidImageData[] => {
  const initialImageState: OverlaidImageData[] = [];
  for (let info of imagesInfo) {
    const imageInfo: OverlaidImageData = {
      render: info.render,
      imgProps: info.imgProps,
      relativePositionAndSize: info.relativePositionAndSize,
      absolutePositionAndSize: initialAbsolute,
    };
    initialImageState.push(imageInfo);
  }
  return initialImageState;
};

export const absolutePositionAndSizeToCSS = (
  absolutePositionAndSize: AbsolutePositionAndSize
): CSSProperties => {
  return {
    position: "absolute",
    top: formatToPixels(
      absolutePositionAndSize?.top ? absolutePositionAndSize?.top : 0
    ),
    left: formatToPixels(
      absolutePositionAndSize?.left ? absolutePositionAndSize?.left : 0
    ),
    width: formatToPixels(
      absolutePositionAndSize?.width ? absolutePositionAndSize?.width : 0
    ),
    height: formatToPixels(
      absolutePositionAndSize?.height ? absolutePositionAndSize?.height : 0
    ),
  };
};
