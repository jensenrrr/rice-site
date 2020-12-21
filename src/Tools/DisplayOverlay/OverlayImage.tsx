import React, { FunctionComponent } from "react";
import { OverlaidImageData, OverlayImageInstance } from "./OverlayTypes";
import { formatToPixels } from "./DisplayOverlayLogic";

export const OverlayImages = (overlayImages: readonly OverlaidImageData[]) =>
  overlayImages.map((overlaidImage, i) => (
    <OverlayImage
      img={overlaidImage.img}
      absolutePositionAndSize={overlaidImage.absolutePositionAndSize}
      key={"overlay" + i}
    />
  ));

export const OverlayImage: FunctionComponent<OverlayImageInstance> = ({
  img,
  absolutePositionAndSize,
}: OverlayImageInstance) => {
  return (
    <img
      src={img}
      alt=""
      style={{
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
      }}
    />
  );
};
