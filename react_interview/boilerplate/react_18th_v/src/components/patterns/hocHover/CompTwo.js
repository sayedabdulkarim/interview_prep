import React from "react";
import withHover from "./HoverHoc";

const MyComponent = ({ isHovered }) => {
  return <div>{isHovered ? "True" : "false"}</div>;
};

export default withHover(MyComponent); // Wrap MyComponent with HoverHOC
