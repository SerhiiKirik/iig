import { FC } from 'react';
import cn from 'classnames';
import { TabType } from '../../types/TabType';
import { Tab } from '../Tab/Tab';

interface Props {
  tabs: TabType[];
  selectedTab: TabType,
  onChange: (tab: TabType) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTab, onChange }) => {
  const { id, Content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === id;

            return (
              <li
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <Tab tab={tab} isActive={isActive} onChange={onChange} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Content />
      </div>
    </div>
  );
};
