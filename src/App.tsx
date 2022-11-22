import React from 'react';
import { Banner } from './common/components/banner/banner.components';
import { Header } from './common/components/header/header.component';
import Feed from './modules/feed/components/feed/feed.component';

export const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};
