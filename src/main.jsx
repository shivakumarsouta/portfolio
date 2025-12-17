import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { init } from '@emailjs/browser';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';

// Initialize EmailJS with Public Key from .env
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#020617',
          color: '#e5e7eb',
          border: '1px solid rgba(250, 204, 21, 0.3)',
        },
      }}
    />
    <App />
  </React.StrictMode>
);