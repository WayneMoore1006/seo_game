import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrendingSection } from '../components/TrendingSection';
import { BentoGridSection } from '../components/BentoGridSection';
import { CommunityReviewsSection } from '../components/CommunityReviewsSection';

/**
 * @component Home
 * @description 遊戲探索平台首頁入口。
 * 組合並渲染 Hero 區塊、橫向捲動熱門遊戲、沉浸式卡片網格與社群評論區塊。
 */
export const Home: React.FC = () => {
  return (
    <>
      <main className="pt-20">
        <HeroSection />
        <TrendingSection />
        <BentoGridSection />
        <CommunityReviewsSection />
      </main>
    </>
  );
};
