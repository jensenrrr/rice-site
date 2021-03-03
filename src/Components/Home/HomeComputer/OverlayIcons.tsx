import styled, { css, keyframes } from "styled-components";
import { ReactComponent as blogSvg } from "../../../Assets/sandbook/Blog.svg";
import { ReactComponent as bookSvg } from "../../../Assets/sandbook/Book.svg";
import { ReactComponent as terminalSvg } from "../../../Assets/sandbook/Terminal.svg";
import { ReactComponent as resumeSvg } from "../../../Assets/sandbook/Resume.svg";
import { ReactComponent as contactSvg } from "../../../Assets/sandbook/Mail.svg";

const fadeIn = (startingOpacity: number, endingOpacity: number) => keyframes`
0% {
  fill-opacity:${startingOpacity};
}
100%{
  fill-opacity:${endingOpacity};
}
`;

const sharedStyles = css`
  animation: ${() => fadeIn(0.05, 0.3)} 4s linear;
  fill-opacity: 0.3;
  .boxFill {
    fill-opacity: 0;
  }
  &:hover {
    path {
      fill: black;
    }
  }
  path {
    fill: blue;
  }
`;

export const TerminalIcon = styled(terminalSvg)`
  ${sharedStyles}
`;

export const BlogIcon = styled(blogSvg)`
  ${sharedStyles}
`;

export const BookIcon = styled(bookSvg)`
  ${sharedStyles}
`;

export const ResumeIcon = styled(resumeSvg)`
  ${sharedStyles}
`;

export const ContactIcon = styled(contactSvg)`
  ${sharedStyles}
  .mailFill {
    fill-opacity: 0;
  }
`;
