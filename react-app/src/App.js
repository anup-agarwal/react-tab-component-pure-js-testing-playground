import React, { useState } from 'react';
import { Tab } from 'react-tab-component-pure-js';
import './App.css'

const Tab1 = () => <div>Content for Tab 1</div>;
const Tab2 = () => <div>Content for Tab 2</div>;

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabList = [
    { name: 'Tab 1', Component: Tab1 },
    { name: 'Tab 2', Component: Tab2 },
  ];

  const handleTabClick = (index) => {
    setCurrentTabIndex(index);
  };

  return (
    <Tab
      tabList={tabList}
      currentTabIndex={currentTabIndex}
      tabClickHandler={handleTabClick}
      selectTabClass="selected-tab"
      unselectedTabClass="unselected-tab"
      tabContainerClass="tab-container"
      tabOptionsClass="tab-options"
    />
  );
};

export default App;
