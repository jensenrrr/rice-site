import { CSSProperties, useState } from "react";
import mailSvg from "../../Assets/Mail.svg";
import terminalSvg from "../../Assets/Terminal.svg";
import waterTerminal from "../../Assets/WaterTerminal.svg";
import { absolutePositionAndSizeToCSS } from "../../Tools/DisplayOverlay/DisplayOverlayLogic";
import {
  OverlaidImageInput,
  OverlayImageRenderProps,
  AbsolutePositionAndSize,
  RelativePositionAndSize,
} from "../../Tools/DisplayOverlay/OverlayTypes";

const adjustSize = (
  adjust: RelativePositionAndSize,
  absolutePositionAndSize: AbsolutePositionAndSize
): AbsolutePositionAndSize => {
  const newPositionAndSize: AbsolutePositionAndSize = {
    width: adjust.widthScale * absolutePositionAndSize.width,
    height: adjust.heightScale * absolutePositionAndSize.height,
    top: adjust.yRelative * absolutePositionAndSize.top,
    left: adjust.xRelative * absolutePositionAndSize.left,
  };
  return newPositionAndSize;
};

const getStyle = (
  hover: boolean,
  adjustedStyle: boolean,
  adjust: any,
  absolutePositionAndSize: AbsolutePositionAndSize
): CSSProperties => {
  if (!hover || !adjustedStyle) {
    return absolutePositionAndSizeToCSS(absolutePositionAndSize);
  } else {
    return absolutePositionAndSizeToCSS(
      adjustSize(adjust, absolutePositionAndSize)
    );
  }
};

const ImageReplacedOnHover = ({
  img,
  hoverImg,
  hoverAdjust,
  absolutePositionAndSize,
}: OverlayImageRenderProps) => {
  const [hover, setHover] = useState(false);
  const [adjustedStyle, setAdjustedStyle] = useState(false);

  return (
    <img
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setHover(false);
        setAdjustedStyle(false);
      }}
      onLoad={() => (hover ? setAdjustedStyle(true) : null)}
      src={hover ? hoverImg : img}
      alt=""
      style={getStyle(
        hover,
        adjustedStyle,
        hoverAdjust,
        absolutePositionAndSize
      )}
    />
  );
};

export const terminal: OverlaidImageInput = {
  render: ({
    img,
    hoverImg,
    hoverAdjust,
    absolutePositionAndSize,
  }: OverlayImageRenderProps) => (
    <ImageReplacedOnHover
      img={img}
      hoverImg={hoverImg}
      hoverAdjust={hoverAdjust}
      absolutePositionAndSize={absolutePositionAndSize}
    />
  ),
  imgProps: {
    img: terminalSvg,
    hoverImg: waterTerminal,
    hoverAdjust: {
      widthScale: 1.2,
      heightScale: 1.2,
      yRelative: 0.98,
      xRelative: 0.984,
    },
  },
  relativePositionAndSize: {
    yRelative: 0.252,
    xRelative: 0.634,
    widthScale: 0.0928,
    heightScale: 0.1123,
  },
};

export const mail: OverlaidImageInput = {
  render: ({
    img,
    hoverImg,
    hoverAdjust,
    absolutePositionAndSize,
  }: OverlayImageRenderProps) => (
    <ImageReplacedOnHover
      img={img}
      hoverImg={hoverImg}
      hoverAdjust={hoverAdjust}
      absolutePositionAndSize={absolutePositionAndSize}
    />
  ),
  imgProps: {
    img: mailSvg,
    hoverImg: mailSvg,
    hoverAdjust: {
      xRelative: 1,
      yRelative: 1,
      widthScale: 1,
      heightScale: 1,
    },
  },
  relativePositionAndSize: {
    yRelative: 0.518,
    xRelative: 0.065,
    widthScale: 0.14,
    heightScale: 0.135,
  },
};
