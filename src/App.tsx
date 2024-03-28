import React from 'react';
import logo from './logo.svg';
import { browserRouter } from './Components/Router/BrowserRouter';
import './App.css';
import MainPage from './Components/Pages/AboutPage/AboutPage';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
