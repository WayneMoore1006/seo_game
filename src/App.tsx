import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { TopNavBar } from './components/TopNavBar';
import { Home } from './pages/Home';
import { Discovery } from './pages/Discovery';
import { Blog } from './pages/Blog';
import { ArticleDetail } from './pages/ArticleDetail';
import { GameDetail } from './pages/GameDetail';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: '#1c2029',
            color: '#eff0fa',
            border: '1px solid rgba(86, 101, 142, 0.2)',
          },
        }} />
        <TopNavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Discovery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
            <Route path="/game/:id" element={<GameDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
