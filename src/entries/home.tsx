import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from '../components/AppShell';
import { Blog } from '../pages/Blog';
import '../index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell>
      <Blog />
    </AppShell>
  </StrictMode>
);
