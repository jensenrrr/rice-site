import React, { CSSProperties } from "react";
import {
  AbsolutePositionAndSize,
  OverlaidImageData,
  OverlayImageInstance,
} from "./OverlayTypes";
import { formatToPixels } from "./DisplayOverlayLogic";

export const OverlayImages = (overlayImages: readonly OverlaidImageData[]) =>
  overlayImages.map((overlaidImage, i) => (
    <OverlayImage
      render={overlaidImage.render}
      imgProps={overlaidImage.imgProps}
      absolutePositionAndSize={overlaidImage.absolutePositionAndSize}
      key={"overlay" + i}
    />
  ));

export const OverlayImage = ({
  render,
  imgProps,
  absolutePositionAndSize,
}: OverlayImageInstance) => {
  return render({ absolutePositionAndSize, ...imgProps });
};
