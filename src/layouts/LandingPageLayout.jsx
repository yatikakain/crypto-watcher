import React from 'react';
import { useEffect } from 'react';

import {
  Aside,
  Breadcrumbs,
  Footer,
  MainContent,
  NavBar,
  Providers,
} from '../components';

import { useParams } from "react-router-dom";

export function LandingPageLayout() {
  const { id } = useParams();
  useEffect(() => {
    // Store the `id` in local storage
    if (id) {
      localStorage.setItem("coinId", id);
    }
  }, [id]);

  const breadCrumbLinks = [
    {
      id: 0,
      label: 'Cryptocurrencies',
      route: '/',
      active: false,
    },
    {
      id: 1,
      label: 'Bitcoin',
      route: '/',
      active: true,
    },
  ];

  return (
    <Providers>
      <NavBar />
      <main className="pt-[17.19px] pb-[78px] bitcoin-bg">
        <div className="wrapper flex flex-col gap-[17.81px]">
          <Breadcrumbs breadcrumbs={breadCrumbLinks} />
          <div className="flex flex-col xl:flex-row justify-between gap-5">
            <MainContent />
            <Aside />
          </div>
        </div>
      </main>
      <Footer />
    </Providers>
  );
}
