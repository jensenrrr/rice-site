import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
// Do this v
//https://codesandbox.io/s/qqr44pkvz4?file=/src/index.js

const TestSVG = () => {
  return (
    <div>
      <h1>Hello Sandbook</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button>I am a Button</Button>
    </div>
  );
};

const TestVideo = () => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={"videos/SandbookHighBitRate.mp4"}
        playing
        loop
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};
export default TestSVG;
