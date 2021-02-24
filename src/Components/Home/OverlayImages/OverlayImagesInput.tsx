import React, { Dispatch, SetStateAction, FC } from "react";
import { absolutePositionToCSS } from "../../../Tools/DisplayOverlay/DisplayOverlayLogic";
import {
  OverlaidImageInput,
  OverlayImageRenderProps,
  AbsolutePositionAndSize,
} from "../../../Tools/DisplayOverlay/OverlayTypes";
import BlogIcon from "./BlogIcon";
import BookIcon from "./BookIcon";
import TerminalIcon from "./TerminalIcon";
import { Link } from "react-router-dom";
import ResumeIcon from "./ResumeIcon";
import ContactIcon from "./ContactIcon";
import "../custom.css";

interface DynamicSVGs {
  absolutePositionAndSize: AbsolutePositionAndSize;
  name: string;
  setHovered: Dispatch<SetStateAction<string>>;
}

const IconContainer: FC<DynamicSVGs> = (props) => (
  <Link to={`/${props.name}`}>
    <div
      onMouseEnter={() => props.setHovered(props.name)}
      onMouseLeave={() => props.setHovered("")}
      style={absolutePositionToCSS(props.absolutePositionAndSize)}
    >
      {props.children}
    </div>
  </Link>
);
interface Directory {
  absolutePositionAndSize: AbsolutePositionAndSize;
  hovered: string;
}
const DirectoryDisplay: FC<Directory> = (props) => {
  if (props.hovered) {
    return (
      <div
        className="overlay-box text-3xl"
        style={{ top: `${props.absolutePositionAndSize.top}px` }}
      >
        /{props.hovered}
      </div>
    );
  }
  return <div></div>;
};

export const sandbookOverlaidImages = (
  hovered: string,
  setHovered: Dispatch<SetStateAction<string>>
) => {
  const blog: OverlaidImageInput = {
    render: ({ absolutePositionAndSize }: OverlayImageRenderProps) => (
      <IconContainer
        name={"Blog"}
        setHovered={setHovered}
        absolutePositionAndSize={absolutePositionAndSize}
      >
        <BlogIcon
          width={absolutePositionAndSize.height * 1.48}
          height={absolutePositionAndSize.height}
        />
      </IconContainer>
    ),
    relativePositionAndSize: {
      yRelative: 0.325,
      xRelative: 0.766,
      widthScale: 0.1088 * 1.09,
      heightScale: 0.1123 * 1.09,
    },
  };

  const terminal: OverlaidImageInput = {
    render: ({ absolutePositionAndSize }: OverlayImageRenderProps) => (
      <IconContainer
        name={"Projects"}
        setHovered={setHovered}
        absolutePositionAndSize={absolutePositionAndSize}
      >
        <TerminalIcon
          width={absolutePositionAndSize.height * 1.48}
          height={absolutePositionAndSize.height}
        />
      </IconContainer>
    ),
    relativePositionAndSize: {
      yRelative: 0.338,
      xRelative: 0.638,
      widthScale: 0.101 * 1.2,
      heightScale: 0.1123 * 1.1,
    },
  };

  const book: OverlaidImageInput = {
    render: ({ absolutePositionAndSize }: OverlayImageRenderProps) => (
      <IconContainer
        name={"Writing"}
        setHovered={setHovered}
        absolutePositionAndSize={absolutePositionAndSize}
      >
        <BookIcon
          width={absolutePositionAndSize.height * 1.46}
          height={absolutePositionAndSize.height}
        />
      </IconContainer>
    ),
    relativePositionAndSize: {
      yRelative: 0.497,
      xRelative: 0.6385,
      widthScale: 0.106,
      heightScale: 0.131,
    },
  };

  const resume: OverlaidImageInput = {
    render: ({ absolutePositionAndSize }: OverlayImageRenderProps) => (
      <IconContainer
        name={"Resume"}
        setHovered={setHovered}
        absolutePositionAndSize={absolutePositionAndSize}
      >
        <ResumeIcon
          width={absolutePositionAndSize.height * 1.48}
          height={absolutePositionAndSize.height}
        />
      </IconContainer>
    ),
    relativePositionAndSize: {
      yRelative: 0.48,
      xRelative: 0.766,
      widthScale: 0.111,
      heightScale: 0.1336,
    },
  };

  const contact: OverlaidImageInput = {
    render: ({ absolutePositionAndSize }: OverlayImageRenderProps) => (
      <IconContainer
        name={"Contact"}
        setHovered={setHovered}
        absolutePositionAndSize={absolutePositionAndSize}
      >
        <ContactIcon
          width={absolutePositionAndSize.width}
          height={absolutePositionAndSize.height}
        />
      </IconContainer>
    ),
    relativePositionAndSize: {
      yRelative: 0.675,
      xRelative: 0.02,
      widthScale: 0.168,
      heightScale: 0.168,
    },
  };

  const directory: (hovered: string) => OverlaidImageInput = (hovered) => {
    return {
      render: ({
        absolutePositionAndSize,
        globalProps,
      }: OverlayImageRenderProps) => (
        <DirectoryDisplay
          hovered={globalProps.hovered}
          absolutePositionAndSize={absolutePositionAndSize}
        />
      ),
      relativePositionAndSize: {
        yRelative: 0.338,
        xRelative: 0.638,
        widthScale: 0.101 * 1.2,
        heightScale: 0.1123 * 1.1,
      },
    };
  };

  return [terminal, blog, book, resume, contact, directory(hovered)];
};
