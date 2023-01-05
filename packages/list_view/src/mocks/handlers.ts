import { rest } from 'msw';
import ArticleItemProps from '../pages/ArticleLIst/types/ArticleItem';

/* -------------------------------------------------------------------------- */
/*                                  mock data                                 */
/* -------------------------------------------------------------------------- */
const frontendArticleList: ArticleItemProps[] = [
  {
    title: 'SEO 개선 초심자 가이드',
    date: '2022. 12. 08',
    summary:
      'SEO를 개선해보고 싶지만 어떻게 해야 할지 막막할 때 참고할만한 초심자 가이드입니다.',
    tags: ['SEO'],
  },
  {
    title: '라이브러리 없이 라우터(Router) 만들기',
    date: '2022. 12. 08',
    summary:
      'Fragment 해시를 이용하여 라이브러리 없이 라우터를 직접 만들어봅시다.',
    tags: ['라우터'],
  },
  {
    title: '테스트 코드 자동으로 만들기 feat. Cypress Studio',
    date: '2022. 12. 08',
    summary:
      '테스트 코드를 자동으로 만들 수 있는 Cypress Studio의 사용 방법을 공유합니다. 특히 비 개발자에게 로우코드(Low Code)로 자동화 테스트를 구축하는 데 도움이 될 것입니다.',
    tags: ['cypress studio'],
  },
  {
    title: '마크다운에 컴포넌트 추가하기',
    date: '2022. 12. 08',
    summary:
      '마크다운에 컴포넌트를 추가하여 풍성한 효과가 들어간 글을 작성할 수 있게 합니다.',
    tags: ['마크다운'],
  },
  {
    title: '`API 언제 나오나요?` 로 부터 독립하기',
    date: '2022. 12. 08',
    summary:
      '프론트엔드 개발자들이 시간을 많이 들이는 작업 중 하나는 API 데이터를 사용해서 UI를 그리는 일입니다. 그 중요한 API가 변경이 잦다면, 더 나아가 API 응답 값이 아직 정해지지도 않았다면, 그런데 개발 완…',
    tags: ['API'],
  },
  {
    title: 'Typescript - Union Type, Intersection Type, Etc.',
    date: '2022. 12. 08',
    summary: 'Union, Intersection, Template Literal Types 등을 다룹니다.',
    tags: ['Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
  {
    title: 'React의 Error Boundary를 이용하여 효과적으로 에러 처리하기',
    date: '2022. 12. 08',
    summary: '카카오페이지에 적용된 에러 처리 방식에 대해 공유합니다',
    tags: ['React', 'Error Boundary', 'Typescript'],
  },
];
const backendArticleList: ArticleItemProps[] = [
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

/* -------------------------------------------------------------------------- */
/*                               mock data util                               */
/* -------------------------------------------------------------------------- */
const getFrontendTags = frontendArticleList.reduce((total: string[], cur) => {
  cur.tags.forEach((tag: string) =>
    total.includes(tag) ? '' : total.push(tag),
  );
  return total;
}, []);
const getBackendTags = backendArticleList.reduce((total: string[], cur) => {
  cur.tags.forEach((tag: string) =>
    total.includes(tag) ? '' : total.push(tag),
  );
  return total;
}, []);

export const handlers: any = [
  /* -------------------------------------------------------------------------- */
  /*                            [List] Article 목록                              */
  /*                     /list/frontend?tag=SEO&tag=라우터                        */
  /* -------------------------------------------------------------------------- */
  rest.get('/articlelist/frontend', (req, res, ctx) => {
    let data: ArticleItemProps[] = [];
    const tagQueryParameters: string[] = req.url.searchParams.getAll('tag');
    const { searchParams } = req.url;
    const currentPage = Number(searchParams.get('currentPage'));
    if (tagQueryParameters.length > 0) {
      data = frontendArticleList.filter((article) =>
        tagQueryParameters.every((tag) => article.tags.includes(tag)),
      );
      data = data.slice(0, currentPage * 10);
    } else {
      data = frontendArticleList.slice(0, currentPage * 10);
    }
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get('/articlelist/backend', (req, res, ctx) => {
    let data: ArticleItemProps[] = [];
    const tagQueryParameters: string[] = req.url.searchParams.getAll('tag');
    const { searchParams } = req.url;
    const currentPage = Number(searchParams.get('currentPage'));

    if (tagQueryParameters.length > 0) {
      data = backendArticleList.filter((article) =>
        tagQueryParameters.every((tag) => article.tags.includes(tag)),
      );
      data = data.slice(0, currentPage * 10);
    } else {
      data = backendArticleList.slice(0, currentPage * 10);
    }
    return res(ctx.status(200), ctx.json(data));
  }),

  /* -------------------------------------------------------------------------- */
  /*                                [List] 태그 목록                              */
  /* -------------------------------------------------------------------------- */
  rest.get('/articlelist/frontend/tags', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getFrontendTags));
  }),
  rest.get('/articlelist/backend/tags', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getBackendTags));
  }),

  /* -------------------------------------------------------------------------- */
  /*                                 [View] 데이터                                */
  /* -------------------------------------------------------------------------- */
];
