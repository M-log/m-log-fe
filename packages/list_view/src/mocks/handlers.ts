import { rest } from 'msw';
import ArticleItemProps from '../pages/ArticleLIst/types/ArticleItem';

const frontendList: ArticleItemProps[] = [
  {
    title: 'SEO 개선 초심자 가이드',
    date: '2022. 12. 08',
    summary:
      'SEO를 개선해보고 싶지만 어떻게 해야 할지 막막할 때 참고할만한 초심자 가이드입니다.',
    tags: ['SEO', '가이드'],
  },
  {
    title: '라이브러리 없이 라우터(Router) 만들기',
    date: '2022. 12. 08',
    summary:
      'Fragment 해시를 이용하여 라이브러리 없이 라우터를 직접 만들어봅시다.',
    tags: ['라우터'],
  },
];
const backendList: ArticleItemProps[] = [
  {
    title: 'Java',
    date: '2022. 12. 08',
    summary: '백엔드 Java 가이드입니다.',
    tags: ['java'],
  },
  {
    title: 'Kotlin',
    date: '2022. 12. 08',
    summary: '코틀린을 이용하여 구현해봅시다.',
    tags: ['kotlin'],
  },
];

const frontendTags = frontendList.reduce((total: string[], cur) => {
  cur.tags.forEach((tag: string) => total.push(tag));
  return total;
}, []);
const backendTags = backendList.reduce((total: string[], cur) => {
  cur.tags.forEach((tag: string) => total.push(tag));
  return total;
}, []);

export const handlers: any = [
  /**
   * [list] 포스팅 목록 출력
   * 예시 : /list/frontend?tags=SEO&tags=라우터
   */
  rest.get('/list/frontend', (req, res, ctx) => {
    let data: ArticleItemProps[] = [];
    const tagQueryParameters: string[] = req.url.searchParams.getAll('tag');

    if (tagQueryParameters) {
      data = frontendList.filter((item) =>
        item.tags.map((tag) => (tagQueryParameters.includes(tag) ? item : '')),
      );
    } else {
      data = frontendList;
    }
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get('/list/backend', (req, res, ctx) => {
    let data: ArticleItemProps[] = [];
    const tagQueryParameters: string[] = req.url.searchParams.getAll('tag');

    if (tagQueryParameters) {
      data = backendList.filter((item) =>
        item.tags.map((tag) => (tagQueryParameters.includes(tag) ? item : '')),
      );
    } else {
      data = backendList;
    }
    return res(ctx.status(200), ctx.json(data));
  }),

  /**
   * [list] 태그 목록 출력
   */
  rest.get('/list/frontend/tags', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(frontendTags));
  }),
  rest.get('/list/backend/tags', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(backendTags));
  }),
];
