import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ErrorPage from './pages/error';
import Customer from './pages/customers/customers'
import Units from './pages/units';
import Payments from './pages/payments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "customers",
    element: <Customer />,
  },
  {
    path: "units",
    element: <Units />,
  },
  {
    path: "customers",
    element: <Customer />,
  },
  {
    path:"payments",
    element: <Payments />,
  }
]);


Amplify.configure(config);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
