import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Support for React Snap
if (document.getElementById('root').hasChildNodes()) {
  ReactDOM.hydrateRoot(document.getElementById('root'), rootElement);
} else {
  root.render(rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
