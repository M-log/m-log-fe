import axios from 'axios';
import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import ArticleItemProps from '../pages/ArticleLIst/types/ArticleItem';

interface useInfiniteScrollType {
  ref: MutableRefObject<HTMLUListElement | null>;
  articleList: ArticleItemProps[];
  tagList: string[];
  handleCheckAddTag: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NUMBER_OF_ITEMS_PER_PAGE = 10;

export default function useInfiniteScroll(
  currentCategory: string,
): useInfiniteScrollType {
  const ref: MutableRefObject<HTMLUListElement | null> =
    useRef<HTMLUListElement>(null);

  const [articleList, setArticleList] = useState([]);
  const [currentPage, setCurrentpage] = useState<number>(1);
  const [tagList, setTagList] = useState([]);
  const [checkedTagList, setCheckedTagList] = useState<string[]>([]);

  /* -------------------------------------------------------------------------- */
  /*                              아티클리스트, 태그리스트 출력                              */
  /* -------------------------------------------------------------------------- */
  const getList = async (currentCategory: any) => {
    const res = await axios.get(`/articlelist/${currentCategory}`, {
      params: { currentPage: currentPage },
    });
    setArticleList(res.data);
  };

  const getTagList = async (currentCategory: any) => {
    const res = await axios.get(`/articlelist/${currentCategory}/tags`);
    setTagList(res.data);
  };

  useEffect(() => {
    if (checkedTagList.length > 0) {
      getListFromTags(currentCategory, checkedTagList);
    } else {
      getList(currentCategory);
    }
    getTagList(currentCategory);
  }, [currentCategory, currentPage, checkedTagList]);

  const getListFromTags = async (currentCategory: any, checkedTags: any) => {
    const joinCheckedTags = checkedTags.join('&tag=');
    const res = await axios.get(
      `/articlelist/${currentCategory}?tag=${joinCheckedTags}`,
      {
        params: {
          currentPage: currentPage,
        },
      },
    );
    setArticleList(res.data);
  };

  const handleCheckAddTag = (e: ChangeEvent<HTMLInputElement>) => {
    const targetTag = e.target.value;
    if (!checkedTagList.includes(targetTag)) {
      setCheckedTagList((prev) => [...prev, targetTag]);
    } else {
      setCheckedTagList((prev) => prev.filter((item) => item !== targetTag));
    }
  };

  const observerCallback = (entries: any, observer: any) => {
    if (!entries[0].isIntersecting) return;

    setCurrentpage((page) => page + 1);
    observer.disconnect();
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    observerCallback,
  );

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * currentPage > articleList.length ||
      ref.current === null ||
      ref.current.children.length === 0
    )
      return;

    observer.observe(ref.current.children[ref.current.children.length - 1]);
  }, [currentCategory, articleList, currentPage]);

  return {
    ref,
    articleList,
    tagList,
    handleCheckAddTag,
  };
}
