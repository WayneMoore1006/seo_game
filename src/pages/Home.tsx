import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrendingSection } from '../components/TrendingSection';
import { BentoGridSection } from '../components/BentoGridSection';
import { CommunityReviewsSection } from '../components/CommunityReviewsSection';

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
