import styled from "styled-components";
import { ReactComponent as resumeSvg } from "../../../Assets/sandbook/Resume.svg";

const ResumeIcon = styled(resumeSvg)`
  .Resume {
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

export default ResumeIcon;
