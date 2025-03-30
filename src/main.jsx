// Versi React 18+
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log(App);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);