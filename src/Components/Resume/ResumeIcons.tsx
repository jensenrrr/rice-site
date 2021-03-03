import styled, { css } from "styled-components";

import { ReactComponent as linkedin } from "../../Assets/welcome/linkedin.svg";
import { ReactComponent as mail } from "../../Assets/welcome/welcomeMail.svg";

const resumeIconStyles = css`
  path {
    fill: #494646;
  }
  &:hover {
    path {
      fill: #7990e1;
    }
  }
`;

export const LinkedInIcon = styled(linkedin)`
  width: 50px;
  height: 50px;
  ${resumeIconStyles}
`;
export const MailIcon = styled(mail)`
  width: 65px;
  height: 65px;
  ${resumeIconStyles}
`;
