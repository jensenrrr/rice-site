import styled from "styled-components";
import { ReactComponent as resumeSvg } from "../../../Assets/sandbook/Resume.svg";

//https://codesandbox.io/s/v303jqkyk7?from-embed=&file=/src/index.js
//https://medium.com/@dimaiv/animating-complex-svg-in-react-c555630f15cd

const ResumeIcon = styled(resumeSvg)`
  .Resume {
    .boxFill {
      fill-opacity: 0;
    }
    &:hover {
      path {
        fill: purple;
        stroke-width: 6;
      }
    }
    path {
      fill: blue;
    }
  }
`;

export default ResumeIcon;
