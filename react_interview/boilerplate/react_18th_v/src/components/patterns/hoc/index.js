import React from "react";
import withBackgroundColor from "./withBackgroundColor";

const MyComponent = ({}) => {
  return <p>Hello WOrld</p>;
};

export default withBackgroundColor(MyComponent, "green");
