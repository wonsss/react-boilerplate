import App from 'App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  const { mockServiceWorker } = require('./mocks/browser');
  mockServiceWorker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
