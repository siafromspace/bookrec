import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="h-screen bg-gradient-to-tr from-pink-500 to-pink-800 p-8 flex flex-col items-center overflow-x-hidden">
      <App />
    </div>
  </BrowserRouter>
);

