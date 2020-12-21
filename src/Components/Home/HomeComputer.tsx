import React, { useState } from "react";
import pic from "../../Assets/HomeComputerCropped.jpg";
import mailSvg from "../../Assets/Mail.svg";
import terminalSvg from "../../Assets/Terminal.svg";
import DisplayOverlay from "../../Tools/DisplayOverlay/DisplayOverlay";
import {
  OverlaidImageData,
  OverlaidImageInput,
} from "../../Tools/DisplayOverlay/OverlayTypes";

interface OverlayImageComponent {
  img: string;
  hoverImg?: string;
  sizeStyle: React.CSSProperties;
}
const OverlayImage = ({ img, hoverImg, sizeStyle }: OverlayImageComponent) => {
  const [hover, setHover] = useState(false);
  return (
    <img
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={hover ? hoverImg : img}
      style={sizeStyle}
    />
  );
};

const mail: OverlaidImageInput = {
  img: mailSvg,
  relativePositionAndSize: {
    yRelative: 0.518,
    xRelative: 0.065,
    widthScale: 0.14,
    heightScale: 0.135,
  },
};
const terminal: OverlaidImageInput = {
  img: terminalSvg,
  relativePositionAndSize: {
    yRelative: 0.252,
    xRelative: 0.634,
    widthScale: 0.0928,
    heightScale: 0.1123,
  },
};
const HomeComputer = () => {
  return (
    <div>
      <DisplayOverlay
        backgroundImage={pic}
        backgroundSize={{ width: true, scale: 100 }}
        overlaidImages={[mail, terminal]}
      />
    </div>
  );
};

export default HomeComputer;

/*
<ImageWithSVGOveraly
img={img}
svgs={
  [
    {src={svg}, position: {relative: true, top: 10, left: 10}}
  ]}
/>
  const onImageLoad = ({ target: img }: any) => {
    let heightOverWidth = img.offsetHeight / img.offsetWidth;
    setMailPosition({
      top: positions.mail.topRatio * img.offsetHeight,
      left: positions.mail.leftRatio * img.offsetWidth,
      width: positions.mail.widthScale * img.offsetWidth,
      height: positions.mail.heightScale * img.offsetHeight,
    });
  };
*/
/*
      <img
        src={pic}
        onLoad={onImageLoad}
        //onResize={onImageResize}
        style={{ position: "relative", width: "100%" }}
        alt={"Well this doesn't look too good."}
      />
      <img
        style={{
          position: "absolute",
          top: mailPosition.top.toString() + "px",
          left: mailPosition.left.toString() + "px",
          width: mailPosition.width.toString() + "px",
          height: mailPosition.height.toString() + "px",
        }}
        src={mail}
        alt="mail"
      />
      */
