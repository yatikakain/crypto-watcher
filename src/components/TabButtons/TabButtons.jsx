import React from 'react';
import { cn } from '../../libs/classnames';
import { Link } from 'react-router-dom';

export const TabButtons = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  const handleClick = (id, route) => {
    setActiveTab(id);
  };
  return (
    <div className="w-full flex gap-8 overflow-x-auto whitespace-nowrap border-b-[#D3E0E6] border-b pt-[14.5px]">
      {tabs.map((tab) => {
        return (
          <Link
            to={tab.route}
            onClick={() => handleClick(tab.id, tab.route)}
            key={tab.id}
            className={cn(
              'font-medium text-base leading-[19.36px] tracking-[-1%] pb-[14.5px]',
              activeTab === tab.id &&
                'text-[#0141CF] border-b-[3px] border-b-[#0141CF]',
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};
