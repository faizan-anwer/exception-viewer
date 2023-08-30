import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar/sidebar.component';
import Main from './components/Main/main.component';
import { RootLayout } from './components/layouts/RootLayout';
import { Container } from './components/Container/Container';
import { Logout } from './components/Logout/logout.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<RootLayout />}>
      <Route index path="login" element={<App />} />
      <Route path="admin" element={<Container />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
