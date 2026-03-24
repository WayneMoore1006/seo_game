import React from 'react';
import { TopNavBar } from '../components/TopNavBar';
import { DiscoverySidebar } from '../components/DiscoverySidebar';
import { DiscoveryContent } from '../components/DiscoveryContent';

/**
 * @component Discovery
 * @description 遊戲進階探索頁面。
 * 提供左側 Sidebar 進行遊戲標籤過濾，與右側 DiscoveryContent 渲染條件篩選後的遊戲網格列表。
 */
export const Discovery: React.FC = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-8 pt-24 pb-24 flex gap-10">
      <DiscoverySidebar />
      <DiscoveryContent />
    </main>
  );
};
