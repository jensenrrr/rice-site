import styled from "styled-components";
import { ReactComponent as contactSvg } from "../../../Assets/sandbook/Mail.svg";

const ContactIcon = styled(contactSvg)`
  .Mail {
    fill-opacity: 0.25;
    .mailFill {
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

export default ContactIcon;
