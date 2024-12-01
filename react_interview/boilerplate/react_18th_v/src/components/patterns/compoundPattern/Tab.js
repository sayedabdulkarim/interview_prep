import React, { createContext, useState, useContext } from "react";

// Context to share state between components
const TabsContext = createContext();

const Tabs = ({ children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => <div>{children}</div>;

const Tab = ({ index, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  return (
    <button
      style={{ fontWeight: activeTab === index ? "bold" : "normal" }}
      onClick={() => setActiveTab(index)}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  const { activeTab } = useContext(TabsContext);

  return <div>{children[activeTab]}</div>;
};

const TabPanel = ({ children }) => <div>{children}</div>;

const App = () => (
  <Tabs defaultActiveTab={0}>
    <TabList>
      <Tab index={0}>Tab 1</Tab>
      <Tab index={1}>Tab 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content for Tab 1</TabPanel>
      <TabPanel>Content for Tab 2</TabPanel>
    </TabPanels>
  </Tabs>
);

export default App;
