import { DateTime } from 'luxon';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../../../../common/components/favorite-button/favorite-button.component';
import { FeedArticle } from '../api/dto/global-feed.in';
import { TagList } from './tag-list/tag-list.component';

interface ArticleProps extends FeedArticle {}

export const Article: FC<ArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={`/@${author.username}`}>
              <img
                className="inline-block h-8 w-8 rounded-full"
                src={author.image}
                alt={`${author.username} avatar`}
              />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link className="font-medium" to={`/@${author.username}`}>
                {author.username}
              </Link>
              <span className="text-conduit-grey text-date">
                {DateTime.fromISO(createdAt).setLocale('en').toLocaleString(DateTime.DATE_FULL)}
              </span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link className="hover:no-underline" to="/article/edfwf">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-darkestGray">{title}</h1>
        </Link>
        <p className="text-conduit-darkenGray font-light mb-1">{description}</p>
        <div className="flex justify-between">
          <span className="text-conduit-grey text-date cursor-pointer font-light">
            Read more...
          </span>
          <TagList list={tagList} />
        </div>
      </div>
    </article>
  );
};
