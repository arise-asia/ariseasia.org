import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MovementsPage from './pages/MovementsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Arise2023Page from './pages/Arise2023Page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'movements',
        element: <MovementsPage />,
      },
      { path: 'arise2023', element: <Arise2023Page /> },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
