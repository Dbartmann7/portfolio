import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MobileContextProvider } from './Contexts/MoblieContext';
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import { browserRouter } from './Components/Router/BrowserRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MobileContextProvider>
        <RouterProvider router={browserRouter}/>
    </MobileContextProvider>
  </React.StrictMode>
);

