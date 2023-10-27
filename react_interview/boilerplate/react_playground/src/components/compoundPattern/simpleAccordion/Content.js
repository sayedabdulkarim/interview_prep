import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Content = ({ children }) => {
  const { isExpand, handleExpand } = useContext(AccordionContext);

  return <div>{isExpand ? children : null}</div>;
};

export default Content;
