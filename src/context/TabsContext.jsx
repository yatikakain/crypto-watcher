import React from 'react';
import { stringsToObjects } from '../utils';

const TabsContext = React.createContext();

function TabsContextProvider(props) {
  const [tabs, setTabs] = React.useState(stringsToObjects(props.tabs));
  const [active, setActive] = React.useState(0);

  function onChange(active) {
    setActive(active);
  }
  return (
    <TabsContext.Provider value={{ tabs, setTabs, onChange, active }}>
      {props.children}
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context)
    throw Error('useTabsContext must be wrapped in TabsContextProvider');
  return context;
}

export { TabsContextProvider, useTabsContext };
