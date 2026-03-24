import React from 'react';
import { DiscoverySidebar } from '../components/DiscoverySidebar';
import { DiscoveryContent } from '../components/DiscoveryContent';

export const Discovery: React.FC = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 pt-24 pb-24 flex gap-10">
      <DiscoverySidebar />
      <DiscoveryContent />
    </main>
  );
};
