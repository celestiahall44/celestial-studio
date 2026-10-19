import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const vitalsEndpoint = process.env.REACT_APP_VITALS_ENDPOINT;

reportWebVitals((metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('[web-vitals]', metric.name, metric.value);
  }

  if (!vitalsEndpoint) {
    return;
  }

  const payload = JSON.stringify({
    ...metric,
    route: window.location.pathname,
    userAgent: navigator.userAgent,
    capturedAt: new Date().toISOString(),
  });

  if (navigator.sendBeacon) {
    const body = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon(vitalsEndpoint, body);
    return;
  }

  fetch(vitalsEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Ignore telemetry failures so user experience is never blocked.
  });
});
