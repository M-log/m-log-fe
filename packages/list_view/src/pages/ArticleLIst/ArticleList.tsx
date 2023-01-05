import axios from 'axios';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Header from '../../components/Header';
import ListItem from './ArticleItem';
import { useNavigate, useLocation } from 'react-router-dom';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function ArticleList() {
  const location = useLocation();
  const currentCategoryFromUrl: string =
    location.pathname.split('/').at(-1) || '';

  const { ref, articleList, tagList, handleCheckAddTag } = useInfiniteScroll(
    currentCategoryFromUrl,
  );

  return (
    <>
      <Header />

      {/* Article List */}
      <div>
        <ul className="px-10 mx-auto w-700" ref={ref}>
          {articleList &&
            articleList.map(({ title, date, summary, tags }, i) => (
              <ListItem
                key={i}
                title={title}
                date={date}
                summary={summary}
                tags={tags}
              />
            ))}
        </ul>

        {/* Tags */}
        <ul className="fixed hidden left-3/4 top-300 xl:block text-20">
          <p className="pt-10 font-bold text-16">
            [ 현재 포스팅 개수: {articleList.length} ]
          </p>
          {tagList &&
            tagList.map((tag, i) => (
              <li key={i}>
                <label>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    value={tag}
                    onChange={handleCheckAddTag}
                  />
                  <span className="cursor-pointer text-darkgray peer-checked:text-black peer-checked:font-bold">
                    {tag}
                  </span>
                </label>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
