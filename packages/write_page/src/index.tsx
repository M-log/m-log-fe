import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WritePage from './pages/write'
import './index.css';

const router = createBrowserRouter([
    
    {
      path: '/',
      element: <WritePage />,
    },
  ]);
  

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
        <RouterProvider router={router}/>
)