import React, { Dispatch, SetStateAction, FC } from "react";
import { absolutePositionToCSS } from "react-display-overlay";
import {
  OverlaidElementInput,
  OverlayElementRenderProps,
  AbsolutePositionAndSize,
} from "react-display-overlay";
import { Link } from "react-router-dom";
import {
  TerminalIcon,
  BlogIcon,
  BookIcon,
  ResumeIcon,
  ContactIcon,
} from "./OverlayIcons";
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
        className="overlay-box md:text-3xl sm:p-2 lg:p-3 xl:p-4 rounded-md lg:text-4xl xl:text-5xl"
        style={{ top: `${props.absolutePositionAndSize.top}px` }}
      >
        /{props.hovered}
      </div>
    );
  }
  return <div></div>;
};

const sandbookOverlaidImages = (
  hovered: string,
  setHovered: Dispatch<SetStateAction<string>>
) => {
  const blog: OverlaidElementInput = {
    render: ({ absolutePositionAndSize }: OverlayElementRenderProps) => (
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

  const terminal: OverlaidElementInput = {
    render: ({ absolutePositionAndSize }: OverlayElementRenderProps) => (
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

  const book: OverlaidElementInput = {
    render: ({ absolutePositionAndSize }: OverlayElementRenderProps) => (
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

  const resume: OverlaidElementInput = {
    render: ({ absolutePositionAndSize }: OverlayElementRenderProps) => (
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

  const contact: OverlaidElementInput = {
    render: ({ absolutePositionAndSize }: OverlayElementRenderProps) => (
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

  const directory: (hovered: string) => OverlaidElementInput = (hovered) => {
    return {
      render: ({
        absolutePositionAndSize,
        globalProps,
      }: OverlayElementRenderProps) => (
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

export default sandbookOverlaidImages;
