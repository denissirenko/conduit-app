import React from 'react';
import { Container } from '../../../../common/components/container/container.components';
import ArticleList from '../article-list/article-list.components';

const Feed = () => {
  return (
    <Container>
      <div className="flex">
        <ArticleList />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};

export default Feed;
