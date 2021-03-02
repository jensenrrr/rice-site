import styled from "styled-components";
import { ReactComponent as blogSvg } from "../../../Assets/sandbook/Blog.svg";

const BlogIcon = styled(blogSvg)`
  .Blog {
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

export default BlogIcon;
