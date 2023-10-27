import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
const Header = ({ children }) => {
  const { isExpand, handleExpand } = useContext(AccordionContext);

  return <div onClick={handleExpand}>{children}</div>;
};

export default Header;
