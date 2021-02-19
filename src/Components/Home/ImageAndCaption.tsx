import React, { FC } from "react";

interface ImageAndCaptionStyles {
  div?: string;
  img?: string;
}
interface ImageAndCaption {
  img: string;
  styles?: ImageAndCaptionStyles;
}
const ImageAndCaption: FC<ImageAndCaption> = ({ img, styles, children }) => {
  return (
    <div className={`${styles ? styles.div : ""} w-80 flex flex-col`}>
      <img
        src={img}
        width="230"
        className="flex-none mx-auto"
        style={{ height: "auto" }}
      />
      {children}
    </div>
  );
};

export default ImageAndCaption;
