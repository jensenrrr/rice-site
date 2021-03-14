import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

interface IContactFooter {
  borderColor: string;
  hoverBorderColor: string;
  textColor: string;
  hoverTextColor: string;
  containerClasses: string;
  text: string;
  url: string;
}

interface IHorizontalLine {
  borderColor: string;
  hoverBorderColor: string;
  contactHover: boolean;
}

const HorizontalLine: FC<IHorizontalLine> = ({
  borderColor,
  hoverBorderColor,
  contactHover,
}) => (
  <div
    className={`mt-2 h-0 border-b-4 rounded-md flex-grow ${
      contactHover ? hoverBorderColor : borderColor
    }`}
  ></div>
);

const ContactFooter: FC<IContactFooter> = ({
  borderColor,
  hoverBorderColor,
  textColor,
  hoverTextColor,
  containerClasses,
  text,
  url,
}) => {
  const [contactHover, setContactHover] = useState(false);
  return (
    <Link to={url}>
      <div
        className={`flex flex-row items-center mx-auto max-w-6xl space-x-4 cursor-pointer ${containerClasses}`}
        onMouseEnter={() => setContactHover(true)}
        onMouseLeave={() => setContactHover(false)}
      >
        <HorizontalLine
          borderColor={borderColor}
          hoverBorderColor={hoverBorderColor}
          contactHover={contactHover}
        />
        <div
          className={`font-semibold text-3xl ${
            contactHover ? hoverTextColor : textColor
          }`}
        >
          {text}
        </div>
        <HorizontalLine
          borderColor={borderColor}
          hoverBorderColor={hoverBorderColor}
          contactHover={contactHover}
        />
      </div>
    </Link>
  );
};

export default ContactFooter;
