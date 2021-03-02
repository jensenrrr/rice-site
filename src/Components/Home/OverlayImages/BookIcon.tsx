import styled from "styled-components";
import { ReactComponent as bookSvg } from "../../../Assets/sandbook/Book.svg";

const BookIcon = styled(bookSvg)`
  .Book {
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

export default BookIcon;
