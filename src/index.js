import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { CategoryContextProvider } from './context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CategoryContextProvider> */}
      <App />
    {/* </CategoryContextProvider> */}
  </React.StrictMode>
);