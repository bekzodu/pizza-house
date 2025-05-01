import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { trackEvent } from './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Track app initialization
trackEvent('app_initialized', {
  initialization_time: new Date().toISOString()
});

// Support for React Snap
if (document.getElementById('root').hasChildNodes()) {
  ReactDOM.hydrateRoot(document.getElementById('root'), rootElement);
  trackEvent('app_hydrated');
} else {
  root.render(rootElement);
  trackEvent('app_rendered');
}

// Send web vitals to Firebase Analytics
reportWebVitals(({ name, value, id }) => {
  trackEvent('web_vitals', {
    metric_id: id,
    metric_name: name,
    metric_value: Math.round(value),
    metric_delta: value
  });
});
