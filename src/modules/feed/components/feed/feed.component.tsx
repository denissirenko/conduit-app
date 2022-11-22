import React from 'react';
import { Container } from '../../../../common/components/container/container.components';
import ArticleList from '../article-list/article-list.components';
import Feedtoggle from '../feed-toggle/feed-toggle.component';

const Feed = () => {
  return (
    <Container>
      <Feedtoggle />
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};

export default Feed;
