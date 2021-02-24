import { FC } from "react";

interface ImageAndCaptionStyles {
  div?: string;
  img?: string;
}
interface IImageAndCaption {
  img: string;
  styles?: ImageAndCaptionStyles;
}
const ImageAndCaption: FC<IImageAndCaption> = ({ img, styles, children }) => {
  return (
    <div className={`${styles ? styles.div : ""} w-80 flex flex-col`}>
      <img
        src={img}
        alt=""
        width="230"
        className="flex-none mx-auto"
        style={{ height: "auto" }}
      />
      {children}
    </div>
  );
};

export default ImageAndCaption;
