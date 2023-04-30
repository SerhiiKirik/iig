import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { TabType } from './types/TabType';
import { TABS as tabs } from './components/mockData/mockData.typedefs';

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabSelection = useCallback((tab: TabType) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div className="section">
      <Tabs
        tabs={tabs}
        onChange={handleTabSelection}
        selectedTab={selectedTab}
      />
    </div>
  );
};
