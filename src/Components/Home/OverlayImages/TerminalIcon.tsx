import styled from "styled-components";
import { ReactComponent as terminalSvg } from "../../../Assets/sandbook/Terminal.svg";

const TerminalIcon = styled(terminalSvg)`
  .Terminal {
    fill-opacity: 0.25;
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
  }
`;

export default TerminalIcon;
