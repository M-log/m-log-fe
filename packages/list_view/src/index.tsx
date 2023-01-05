import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { worker } from './mocks/worker';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ArticleList from './pages/ArticleLIst/ArticleList';
import ArticleView from './pages/ArticleView/ArticleView';

// MSW를 사용하기 위해 개발환경일 때만 service worker동작시킨다.
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// 라우터 처리
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/articlelist/frontend" element={<ArticleList />} />
      <Route path="/articlelist/backend" element={<ArticleList />} />
      {/* <Route path="/articlelist/backend/:title" element={<ArticleView />} /> */}
      <Route path="/articleview" element={<ArticleView />} />
    </>,
  ),
);
root.render(
  //   <React.StrictMode>
  <RouterProvider router={router} />,
  //   </React.StrictMode>,
);
