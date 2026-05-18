import React, { useState, useEffect } from 'react';
import { articles } from '../data/articles';
import { ThreadsCurationsCarousel } from '../components/ui/ThreadsCurationsCarousel';
import { SteamRankingService } from '../services/SteamRankingService';
import { SteamRankingGame } from '../types';
import { HeatRankingMarquee } from '../components/home/HeatRankingMarquee';
import { SteamDealList } from '../components/home/SteamDealList';

export const Blog: React.FC = () => {
  const [rankingData, setRankingData] = useState<{
    topHeatGames: SteamRankingGame[];
    freeGames: SteamRankingGame[];
    discountGames: SteamRankingGame[];
    dataSourceLabel: string;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchRanking = async () => {
      const data = await SteamRankingService.getRankingData();
      if (isMounted) setRankingData(data);
    };
    fetchRanking();
    return () => { isMounted = false; };
  }, []);

  const featuredArticles = articles.slice(0, 2);

  if (articles.length === 0) {
    return (
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-on-surface">
        <h2 className="text-2xl font-bold font-headline mb-4">目前沒有推薦文章</h2>
        <p className="text-on-surface-variant">請稍後再回來查看社群精選遊戲！</p>
      </main>
    );
  }

  return (
    <div className="pt-20">
      {/* 熱度跑馬燈（全寬） */}
      {rankingData && rankingData.topHeatGames.length > 0 && (
        <HeatRankingMarquee games={rankingData.topHeatGames} dataSourceLabel={rankingData.dataSourceLabel} />
      )}

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 左側：免費與特價遊戲 */}
          {rankingData && (rankingData.freeGames.length > 0 || rankingData.discountGames.length > 0) && (
            <aside className="lg:w-1/3 lg:flex-shrink-0 xl:w-1/4">
              {rankingData.freeGames.length > 0 && (
                <SteamDealList 
                  title="免費遊戲推薦" 
                  games={rankingData.freeGames} 
                  iconName="redeem" 
                  iconColorClass="text-green-400" 
                />
              )}
              {rankingData.discountGames.length > 0 && (
                <SteamDealList 
                  title="今日特價推薦" 
                  games={rankingData.discountGames} 
                  iconName="sell" 
                  iconColorClass="text-yellow-400" 
                />
              )}
            </aside>
          )}

          {/* 右側：主文章區 */}
          <div className="flex-1 overflow-hidden">
            <section className="mb-24">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface">Trending Deep Dives</h2>
                  <p className="text-on-surface-variant text-sm mt-1">Our most popular community curations this week.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <a key={article.id} href={`/steam-best-games/${article.id}/index.html`} className="bg-surface-container rounded-xl overflow-hidden group hover:bg-surface-container-high transition-all duration-300 block">
                    <div className="h-48 overflow-hidden">
                      <img alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={article.heroImage} />
                    </div>
                    <div className="p-8">
                      <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4 block">{article.category}</span>
                      <h3 className="font-headline text-2xl font-bold mb-4 leading-snug">{article.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">{article.description}</p>
                      <div className="flex items-center gap-3 text-xs text-on-surface-variant border-t border-outline-variant/10 pt-6">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <ThreadsCurationsCarousel articles={articles} />
          </div>

        </div>
      </main>
    </div>
  );
};
