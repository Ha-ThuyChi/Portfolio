import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import MyProject from './MyProject';
import MyResume from './MyResume';
import GetInTouch from './GetInTouch';



const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/MyProjects",
    element: <MyProject/>
  },
  {
    path: "/MyResume",
    element: <MyResume/>
  },
  {
    path: "/Contact",
    element: <GetInTouch/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
