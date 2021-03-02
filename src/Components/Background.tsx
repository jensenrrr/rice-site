import React, { FC } from "react";

const Background: FC<{ classes?: string }> = ({ classes, children }) => (
  <div
    className={classes ? classes : ""}
    style={{ backgroundColor: "#FAFAFA" }}
  >
    {children}
  </div>
);

export default Background;
