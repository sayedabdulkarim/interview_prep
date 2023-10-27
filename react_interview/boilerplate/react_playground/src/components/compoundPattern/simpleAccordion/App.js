import React from "react";
import { Accordion } from "./components/compoundPattern";
import Content from "./components/compoundPattern/Content";
import Header from "./components/compoundPattern/Header";

const arrayOfObjects = [
  { title: "Title 1", description: "Description 1" },
  { title: "Title 2", description: "Description 2" },
  { title: "Title 3", description: "Description 3" },
  { title: "Title 4", description: "Description 4" },
  { title: "Title 5", description: "Description 5" },
];

const App = () => {
  return (
    <div>
      {arrayOfObjects.map((item) => {
        const { title, description } = item;
        return (
          <Accordion>
            <Accordion.Header>
              <h1>{title}</h1>
            </Accordion.Header>
            <Accordion.Content>
              <p> {description} </p>
            </Accordion.Content>
          </Accordion>
          // <Accordion>
          //   <Header>
          //     <h1>{title}</h1>
          //   </Header>
          //   <Content>
          //     <p> {description} </p>
          //   </Content>
          // </Accordion>
        );
      })}
    </div>
  );
};

export default App;
