import React, { useState } from "react";
import DisplayOverlay from "react-display-overlay";
import { OverlaidElementInput } from "react-display-overlay";
import sandbookOverlaidImages from "./OverlayImagesInput";
import sandbookBackground from "./ComputerBackground";

const HomeComputer = () => {
  const [hovered, setHovered] = useState("");
  const overlaidImages: OverlaidElementInput[] = sandbookOverlaidImages(
    hovered,
    setHovered
  );

  const onLoad = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div>
      <DisplayOverlay
        background={sandbookBackground}
        backgroundScale={{
          width: 1920,
          height: 1080,
          heightTrim: 0.14,
          cutTop: true,
          cutBottom: false,
        }}
        globalProps={{
          hovered: hovered,
        }}
        overlaidElements={overlaidImages}
        onLoad={onLoad}
      />
    </div>
  );
};

export default HomeComputer;
