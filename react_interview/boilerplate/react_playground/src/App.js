import React from "react";
import Accordion from "./test/Accordion";
import Content from "./test/Content";
import Header from "./test/Header";

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
      <h1>App</h1>

      {arrayOfObjects.map((item) => {
        const { title, description } = item;
        return (
          // <Accordion>
          //   <Header>
          //     <div>{title}</div>
          //   </Header>
          //   <Content>
          //     <p>{description}</p>
          //   </Content>
          // </Accordion>

          <Accordion>
            <Accordion.Header>
              <div>{title}</div>
            </Accordion.Header>
            <Accordion.Content>
              <p>{description}</p>
            </Accordion.Content>
          </Accordion>
        );
      })}
    </div>
  );
};

export default App;
