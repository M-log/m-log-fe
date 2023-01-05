import React from 'react';
import ArticleItemProps from './types/ArticleItem';

export default function ArticleItem({
  title,
  date,
  summary,
  tags,
}: ArticleItemProps) {
  return (
    <li className="flex flex-col border-b-2 border-lightgray2">
      <h2 className="pt-20">{title}</h2>
      <time className="pt-5 text-darkgray text-14" dateTime={date}>
        {date}
      </time>
      <p className="pt-10 text-16 text-darkgray ">{summary}</p>
      <div className="py-10 [&>*:nth-child(n+2)]:ml-10">
        {tags &&
          tags.map((tag, i) => (
            <span
              key={i}
              className="py-2 rounded-full w-fit px-15 bg-lightgray"
            >
              #{tag}
            </span>
          ))}
      </div>
    </li>
  );
}
