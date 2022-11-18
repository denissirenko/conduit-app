import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../../../../common/components/favorite-button/favorite-button.component';
import { TagList } from './tag-list/tag-list.component';

export const Article = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@gbfgb">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="avatar"
            />
          </Link>
          <div className="nr-6 ml-0.3 inline-block leading-4 inline-flex flex-col">
            <Link className="font-medium" to="/@gbfgb">
              Denis
            </Link>
            <span className="text-conduit-grey text-date">october, 2022</span>
          </div>
          <FavoriteButton />
        </div>
        <Link className="hover:no-underline" to="/article/edfwf">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-darkestGray">Title</h1>
        </Link>
        <p className="text-conduit-darkenGray font-light mb-1">dbsdfbsgdbdg</p>
        <div className="flex justify-between">
          <span className="text-conduit-grey text-date cursor-pointer font-light">
            Read more...
          </span>
          <TagList />
        </div>
      </div>
    </article>
  );
};
