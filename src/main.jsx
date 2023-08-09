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
import StepThree from './views/StepThree.jsx';
import StepFour from './views/StepFour.jsx';
import StepFive from './views/StepFive.jsx';
import StepSix from './views/StepSix.jsx';

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
        path: 'step-three',
        element: <StepThree />
      },
      {
        path: 'step-four',
        element: <StepFour />
      },
      {
        path: 'step-five',
        element: <StepFive />
      },
      {
        path: 'step-six',
        element: <StepSix />
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
