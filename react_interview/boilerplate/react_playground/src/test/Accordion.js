import React, { createContext, useState } from "react";
import Header from "./Header";
import Content from "./Content";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  const value = { isShow, handleShow };

  return <Provider value={value}>{children}</Provider>;
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
