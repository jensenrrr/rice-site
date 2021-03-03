import styled, { css } from "styled-components";
import { ReactComponent as linkedin } from "../../../Assets/welcome/linkedin.svg";
import { ReactComponent as blog } from "../../../Assets/welcome/welcomeBlog.svg";
import { ReactComponent as github } from "../../../Assets/welcome/github.svg";
import { ReactComponent as book } from "../../../Assets/welcome/welcomeBook.svg";

const welcomeIconStyles = css`
  width: 50px;
  height: 50px;
  &:hover {
    path {
      fill: #7990e1;
    }
  }
`;

export const GitHubIcon = styled(github)`
  ${welcomeIconStyles}
`;
export const BookIcon = styled(book)`
  ${welcomeIconStyles}
`;
export const LinkedInIcon = styled(linkedin)`
  ${welcomeIconStyles}
`;
export const BlogIcon = styled(blog)`
  ${welcomeIconStyles}
`;
