import React from "react";
import { OverlaidImageData, OverlayImageInstance } from "./OverlayTypes";

export const OverlayImages = (
  overlayImages: readonly OverlaidImageData[],
  globalProps: any
) =>
  overlayImages.map((overlaidImage, i) => (
    <OverlayImage
      render={overlaidImage.render}
      globalProps={globalProps}
      absolutePositionAndSize={overlaidImage.absolutePositionAndSize}
      key={"overlay" + i}
    />
  ));

export const OverlayImage = ({
  render,
  globalProps,
  absolutePositionAndSize,
}: OverlayImageInstance) => {
  return render({ absolutePositionAndSize, globalProps });
};
