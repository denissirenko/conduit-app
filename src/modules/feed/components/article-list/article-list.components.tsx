import React from 'react';
import { Article } from '../article/article.component';

function ArticleList() {
  return (
    <div className="w-3/4">
      <Article />
      <Article />
      <Article />
    </div>
  );
}

export default ArticleList;
