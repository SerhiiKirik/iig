import { FC, memo } from 'react';
import { TabType } from '../../types/typedefs';

interface Props {
  tab: TabType;
  isActive: boolean;
  onChange: (tab: TabType) => void;
}

export const Tab: FC<Props> = memo((props) => {
  const { tab, isActive, onChange } = props;

  return (
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        if (!isActive) {
          onChange(tab);
        }
      }}
    >
      {tab.title}
    </a>
  );
});
