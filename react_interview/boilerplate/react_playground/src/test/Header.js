import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Header = ({ children }) => {
  const { handleShow } = useContext(AccordionContext);
  return <div onClick={handleShow}>{children}</div>;
};

export default Header;
