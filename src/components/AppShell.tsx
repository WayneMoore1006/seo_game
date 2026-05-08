import React from 'react';
import { Toaster } from 'react-hot-toast';
import { TopNavBar } from './TopNavBar';
import { Footer } from './Footer';
import { GoogleAnalytics } from './GoogleAnalytics';

interface Props {
  children: React.ReactNode;
}

export const AppShell: React.FC<Props> = ({ children }) => (
  <>
    <GoogleAnalytics />
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#1c2029',
          color: '#eff0fa',
          border: '1px solid rgba(86, 101, 142, 0.2)',
        },
      }}
    />
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  </>
);
