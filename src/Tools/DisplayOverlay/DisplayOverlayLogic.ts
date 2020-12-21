import DisplayOverlay from "./DisplayOverlay";
import {
  AbsolutePositionAndSize,
  DisplayOverlayInput,
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
      img: overlayImage.img,
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
      img: info.img,
      relativePositionAndSize: info.relativePositionAndSize,
      absolutePositionAndSize: initialAbsolute,
    };
    initialImageState.push(imageInfo);
  }
  return initialImageState;
};
