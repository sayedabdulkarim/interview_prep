import React from "react";
import withHover from "./HoverHoc";

const MyComponent = ({ isHovered }) => {
  return <div>{isHovered ? "I am hovered!" : "Hover over me!"}</div>;
};

export default withHover(MyComponent); // Wrap MyComponent with HoverHOC
