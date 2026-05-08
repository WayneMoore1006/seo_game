import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from '../components/AppShell';
import { ArticleDetail } from '../pages/ArticleDetail';
import { articles } from '../data/articles';
import '../index.css';

const article = articles.find(a => a.id === 'survival-sim')!;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell>
      <ArticleDetail article={article} />
    </AppShell>
  </StrictMode>
);
