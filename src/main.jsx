import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App.jsx';
import LandingPage from './views/LandingPage.jsx';
import StepOne from './views/StepOne.jsx';
import StepTwo from './views/StepTwo.jsx';
import Page404 from './views/Page404.jsx';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />
      },
      {
        path: 'step-one',
        element: <StepOne />
      },
      {
        path: 'step-two',
        element: <StepTwo />
      },
      {
        path: '*',
        element: <Page404 />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
