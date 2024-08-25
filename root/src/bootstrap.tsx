import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import ErrorPage from './pages/errorPage';
import Page from './pages';
import Layout from './pages/layout';
import LoadingPage from './pages/loadingPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: 'v2',
        Component: Outlet,
        children: [
          { path: '', element: <Page label="v2" /> },
          { path: 'app1', element: <Page label="V2 - App1" /> },
          { path: 'app2', element: <Page label="V2 - App2" /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '100%', height: '100%' }}>
      <RouterProvider router={router} fallbackElement={<LoadingPage />} />
    </div>
  </StrictMode>,
);
