import React from 'react';
import { Container } from '../../../../common/components/container/container.components';
import { useGetGlobalFeedQuery } from '../api/repository';
import { ArticleList } from '../article-list/article-list.components';
import Feedtoggle from '../feed-toggle/feed-toggle.component';

const Feed = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <Container>Feed loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading feed</Container>;
  }

  return (
    <Container>
      <Feedtoggle />
      <div className="flex">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">Tags</div>
      </div>
    </Container>
  );
};

export default Feed;
