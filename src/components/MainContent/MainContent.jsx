import React from 'react';
import {
  Performance,
  Sentiments,
  TabButtons,
  About,
  Tokenomics,
  Team,
  Graph,
} from '../../components';
import { useEffect } from 'react';
import { TAB_BUTTONS_ROUTES } from '../../mocks/TabButtons';
import { useLocation } from 'react-router';

export const MainContent = () => {
  const location = useLocation();
  
  return (
    <div className="w-full flex flex-col gap-5">
      <Graph />

      <TabButtons tabs={TAB_BUTTONS_ROUTES} />
      {location.hash === '' && (
        <>
          <Performance />
          <Sentiments />
          <About />
          <Tokenomics />
          <Team />
        </>
      )}
      {location.hash === '#fundamentals' && <Performance />}
      {location.hash === '#sentiments' && <Sentiments />}
      {location.hash === '#news_insight' && <About />}
      {location.hash === '#tokenomics' && <Tokenomics />}
      {location.hash === '#team' && <Team />}
    </div>
  );
};
