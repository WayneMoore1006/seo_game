import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { Blog } from '../pages/Blog';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleAnalytics />
    <Toaster position="bottom-right" toastOptions={{
      style: {
        background: '#1c2029',
        color: '#eff0fa',
        border: '1px solid rgba(86, 101, 142, 0.2)',
      },
    }} />
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <div className="flex-grow">
        <Blog />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
