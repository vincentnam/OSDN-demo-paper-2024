import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/root";
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Root_page from "./routes/root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root_page />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Root_page />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <Root_page />,
        errorElement: <ErrorPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
