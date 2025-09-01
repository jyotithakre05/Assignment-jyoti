import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

function mount() {
  const container = document.getElementById('root');
  if (!container) {
    console.error('Failed to find the root element. Retrying in 100ms...');
    setTimeout(mount, 100);
    return;
  }

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
