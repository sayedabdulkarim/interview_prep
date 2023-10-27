import React, { createContext, useState } from "react";
import Header from "./Header";
import Content from "./Content";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };

  const values = { isExpand, handleExpand };
  return (
    <div>
      {/* <h1>Accordion</h1> */}
      <Provider value={values}>{children}</Provider>
    </div>
  );
};

// Accordion.Header = Header;
// Accordion.Content = Content;

export default Accordion;
