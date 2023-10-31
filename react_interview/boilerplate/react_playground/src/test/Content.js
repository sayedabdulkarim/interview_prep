import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Content = ({ children }) => {
  const { isShow } = useContext(AccordionContext);

  return <>{isShow ? <p>{children}</p> : null}</>;
};

export default Content;
