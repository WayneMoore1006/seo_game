import React, { useEffect } from 'react';
import { Article } from '../types';
import { ArticleGameCard } from '../components/ui/ArticleGameCard';
import { SteamLiveFloatingWidget } from '../components/SteamLiveFloatingWidget';
import { GameComparisonTable } from '../components/seo/GameComparisonTable';
import { SelectionGuide } from '../components/seo/SelectionGuide';
import { ArticleFAQ } from '../components/seo/ArticleFAQ';
import { RelatedArticlesList } from '../components/seo/RelatedArticlesList';
import { articles } from '../data/articles';

import { ArticleHeroTags } from '../components/seo/ArticleHeroTags';

interface Props {
  article: Article;
}

export const ArticleDetail: React.FC<Props> = ({ article }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 300);
    }
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-12 pt-28">
      <header className="mb-12 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <a href="/steam-best-games/" className="text-primary text-[10px] font-bold tracking-widest uppercase hover:underline">{article.category}</a>
          <span className="text-on-surface-variant text-xs">•</span>
          <span className="text-on-surface-variant text-xs font-medium">{article.date}</span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
          {article.title}
        </h1>
        <p className="text-on-surface-variant text-xl font-light leading-relaxed mb-8">
          {article.description}
        </p>
      </header>

      <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-primary/5 border border-outline-variant/10 relative">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <ArticleHeroTags tags={article.heroTags} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* ===== 主文章區 ===== */}
        <article className="lg:col-span-8 space-y-12 text-on-surface-variant text-lg leading-relaxed">
          <p>
            我們蒐集了 Threads 廣大社群粉絲們最真實的推薦，整理出這份精選遊戲名單！從輕鬆派對到硬派驚悚，以下是本次「{article.category}」分類中最受矚目的 Steam 遊戲！👇
          </p>

          {/* 遊戲卡片 */}
          {article.games && article.games.length > 0
            ? article.games.map((game, index) => (
                <ArticleGameCard key={game.id} game={game} index={index} />
              ))
            : article.body && (
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
              )
          }

          {/* 適合誰玩 */}
          {article.audience && article.audience.length > 0 && (
            <section aria-labelledby="audience-heading">
              <h2 id="audience-heading" className="font-headline text-2xl font-bold text-on-surface mb-4">
                🎯 這款分類適合誰玩？
              </h2>
              <ul className="flex flex-wrap gap-2">
                {article.audience.map((item, i) => (
                  <li key={i} className="bg-surface-container border border-outline-variant/20 text-on-surface-variant text-sm px-3 py-1.5 rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 📊 遊戲特色比較表 */}
          <GameComparisonTable article={article} />

          {/* 🧭 新手怎麼選？ */}
          <SelectionGuide article={article} />

          {/* ❓ 常見問題 FAQ（steam-wallet-guide 不顯示）*/}
          {article.id !== 'steam-wallet-guide' && <ArticleFAQ article={article} />}

          {/* 底部按鈕 */}
          <div className="text-center pt-8 border-t border-outline-variant/10">
            <p className="mb-4">還意猶未盡嗎？到我們的首頁尋找更多推薦遊戲！</p>
            <a href="/steam-best-games/" className="primary-gradient text-on-primary px-8 py-3 rounded-md font-bold text-sm inline-flex items-center gap-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              探索更多
            </a>
          </div>
        </article>

        {/* ===== 右側 Sidebar ===== */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            {/* 本篇推薦遊戲清單 */}
            <section className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 shadow-2xl shadow-primary/5">
              <h3 className="font-headline font-bold mb-4 text-on-surface">本篇推薦遊戲清單</h3>
              <ul className="space-y-3">
                {(article.games ?? []).slice(0, 10).map(game => (
                  <li key={`sidebar-${game.id}`}>
                    <button
                      onClick={() => {
                        document.getElementById(`game-${game.steamAppId || game.id}`)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full text-left flex items-center gap-3 group focus:outline-none"
                    >
                      <div className="w-10 h-10 rounded bg-surface-container-highest overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={game.imageUrl} alt="" />
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">{game.title}</h4>
                        <p className="text-[10px] text-on-surface-variant uppercase truncate">{article.category}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* 👾 你可能也會喜歡 */}
            <section className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 shadow-2xl shadow-primary/5">
              <RelatedArticlesList currentArticle={article} articles={articles} />
            </section>
          </div>
        </aside>
      </div>

      <SteamLiveFloatingWidget games={article.games ?? []} category={article.category} />
    </main>
  );
};
