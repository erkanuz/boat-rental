import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Day from './pages/Day.tsx';
import Night from './pages/Night.tsx';
import Home from './pages/Home.tsx';
import Error from './pages/Error/Error.tsx';
import Checkout from './pages/Checkout.tsx';
import Success from './pages/Success.tsx';
import Cookies from './pages/Cookies.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/day',
        element: <Day />,
      },
      {
        path: '/night',
        element: <Night />,
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/cookies',
        element: <Cookies />
      },
      {
        path:'*',
        element: <Error />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)