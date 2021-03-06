import styled from "styled-components";

import { ReactComponent as deus } from "../../Assets/writing/DeusIcon.svg";
import { ReactComponent as rose } from "../../Assets/writing/rose.svg";
import { ReactComponent as wand } from "../../Assets/writing/wand.svg";
import { ReactComponent as trail } from "../../Assets/writing/trail.svg";

export const BookShelfIcon = ({
  name,
  height,
  hover,
}: {
  name: string;
  height: number;
  hover: boolean;
}) => {
  if (name === "Deus") return <DeusIcon hover={hover} height={`${height}px`} />;
  else if (name === "Rose")
    return <RoseIcon hover={hover} height={`${height}px`} />;
  else if (name === "World")
    return <WandIcon hover={hover} height={`${height}px`} />;
  else if (name === "Trail")
    return <TrailIcon hover={hover} height={`${height}px`} width="auto" />;
  return <></>;
};

interface IBookIcon {
  hover: boolean;
}

export const DeusIcon = styled(deus)<IBookIcon>`
  .crane {
    fill: ${(props) => (props.hover ? "silver" : "black")};
  }
  .angel {
    fill: ${(props) => (props.hover ? "#99ffff" : "black")};
    stroke: none;
  }
  .rope {
    fill: ${(props) => (props.hover ? "#875638" : "black")};
  }
  .wingCircle {
    fill: none;
    stroke: none;
  }
`;

export const RoseIcon = styled(rose)<IBookIcon>`
  .leaves {
    fill: ${(props) => (props.hover ? "green" : "black")};
  }
  .petals {
    fill: ${(props) => (props.hover ? "pink" : "black")};
  }
  .stem {
    fill: ${(props) => (props.hover ? "#3a5f0b" : "black")};
  }
`;

export const WandIcon = styled(wand)<IBookIcon>`
  .wand {
    fill: ${(props) => (props.hover ? "#a47449" : "black")};
  }
  .star {
    fill: ${(props) => (props.hover ? "yellow" : "black")};
    stroke: black;
  }
`;

export const TrailIcon = styled(trail)<IBookIcon>`
  margin-top: 5px;
  fill: black;
  .road {
    fill: ${(props) => (props.hover ? "#a47449" : "black")};
  }
  .trees {
    fill: ${(props) => (props.hover ? "green" : "black")};
  }
  .bush {
    fill: ${(props) => (props.hover ? "green" : "black")};
  }
`;
