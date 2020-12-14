import React, { useState } from "react";
import pic from "../../Assets/HomeComputerCropped.jpg";
import mail from "../../Assets/Mail.svg";
//on window resize:
//https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
//mailbox: top: 51.8%, left: 7%
interface OverlayPosition {
  top: number;
  left: number;
}
const positions = {
  mail: {
    top: 0.518,
    left: 0.07,
  },
};
const HomeComputer = () => {
  const onImageLoad = ({ target: img }: any) => {
    let heightOverWidth = img.offsetHeight / img.offsetWidth;
    setMailPosition({
      top: positions.mail.top * img.offsetHeight,
      left: positions.mail.left * img.offsetWidth,
    });
    console.log(heightOverWidth);
  };
  const [mailPosition, setMailPosition] = useState({
    top: 0,
    left: 0,
  });
  return (
    <div>
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
          top: mailPosition.top.toString(),
          left: mailPosition.left.toString(),
        }}
        src={mail}
        alt="mail"
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

*/
