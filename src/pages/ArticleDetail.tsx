import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id) || articles[0]; // fallback to first article if not found

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <main className="max-w-screen-xl mx-auto px-8 py-32 text-center text-on-surface">
        <h1 className="text-4xl font-bold mb-4 font-headline">Article Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline font-bold">Return to Blog</Link>
      </main>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-8 py-12 pt-28">
      {/* Article Header */}
      <header className="mb-12 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Link to="/blog" className="text-primary text-[10px] font-bold tracking-widest uppercase hover:underline">{article.category}</Link>
          <span className="text-on-surface-variant text-xs">•</span>
          <span className="text-on-surface-variant text-xs font-medium">{article.date}</span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
          {article.title}
        </h1>
        <p className="text-on-surface-variant text-xl font-light leading-relaxed mb-8">
          {article.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <img alt="Author" className="w-12 h-12 rounded-full border-2 border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwW_6_BvDR7NPgR1p2iSJw0QabThIELnv1VQbM_L1Xt3WCaa__QrQnfaRsOZuiknwvZ-608SsGctpbZ48XcRJx0vbPmj0FSHfNXDBOWINemrKDIDvoQLGNscKj8IeI8jV21lG0aaGlp42biX_2v3X6boLZmM2G_s1LejpCea74MYUx5SUsAI46dj8Y3judT74X3o2VQHBk5SrlzieI1UFrqNBINI6UxuSn2TZ_kb5fC-X5o7Ao8Tc6CkdGCkJk7T6Oyja_q39pXWzg"/>
          <div className="text-left">
            <p className="text-sm font-bold text-on-surface">Yoshi Community</p>
            <p className="text-xs text-on-surface-variant">Threads Curated</p>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl shadow-primary/5 border border-outline-variant/10">
        <img alt="Hero background" className="w-full h-full object-cover" src={article.heroImage}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <article className="lg:col-span-8 space-y-12 text-on-surface-variant text-lg leading-relaxed">
          <p>
            我們蒐集了 Threads 廣大社群粉絲們最真實的推薦，整理出這份精選遊戲名單！從輕鬆派對到硬派驚悚，以下是本次「{article.category}」分類中最受矚目的 Steam 遊戲！👇
          </p>

          {article.games.map((game, index) => (
            <div key={game.id} className="bg-surface-container-low border-l-4 border-primary p-6 rounded-r-xl my-10 shadow-lg shadow-black/20">
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-3 flex items-center gap-3">
                <span className="text-primary">{index + 1}.</span> {game.title}
              </h3>
              
              {/* 2. Brief Description */}
              <p className="mb-6 text-sm text-on-surface-variant/90 leading-relaxed font-medium">
                {game.description}
              </p>
              
              {/* 3. Threads 相关留言 */}
              <div className="relative mb-8 border-l-2 border-primary/50 pl-5 py-3 bg-surface-container-lowest/50 rounded-r-lg italic text-on-surface-variant shadow-inner">
                <span className="material-symbols-outlined absolute -left-4 -top-3 text-primary bg-surface-container-low rounded-full scale-75 border-4 border-surface-container-low">format_quote</span>
                <p className="text-sm">"{game.threadsComment}"</p>
                <div className="text-[10px] uppercase font-bold text-primary mt-2 tracking-widest">— Threads 推文節錄</div>
              </div>

              {/* 4. 相關影片/圖片 */}
              <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 shadow-xl group">
                <div className="aspect-video relative overflow-hidden bg-black/50">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" src={game.imageUrl} alt={game.title}/>
                  {/* Fake Play Button overlaying the image to fulfill "video" visualization */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-md scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-white text-3xl drop-shadow" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                  </div>
                </div>
                
                {/* 5. Steam 連結 */}
                <div className="p-5 flex justify-between items-center bg-surface-container-high/30">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-on-surface text-3xl">sports_esports</span>
                    <div>
                      <h4 className="font-bold text-on-surface leading-tight text-lg">{game.title}</h4>
                      <p className="text-xs text-on-surface-variant/80 mt-0.5">Steam 官方頁面</p>
                    </div>
                  </div>
                  <a href={game.steamUrl} target="_blank" rel="noopener noreferrer" className="bg-primary/20 text-primary font-bold px-6 py-2.5 rounded-lg hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 flex items-center gap-2">
                    前往 Steam <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-8 border-t border-outline-variant/10">
            <p className="mb-4">還意猶未盡嗎？到我們的首頁尋找更多推薦遊戲！</p>
            <Link to="/browse" className="primary-gradient text-on-primary px-8 py-3 rounded-md font-bold text-sm inline-flex items-center gap-2 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              探索更多
            </Link>
          </div>
        </article>

        {/* Sidebar / Community Discussion */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-10">
            {/* Embedded Threads Container */}
            <section className="bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden shadow-2xl shadow-primary/5">
              <div className="bg-surface-container p-4 flex items-center gap-3 border-b border-outline-variant/10">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-black text-xl leading-none">@</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-sm text-on-surface">Community Discussion</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Powered by Threads</p>
                </div>
              </div>
              
              <div id="threads-embed-container" className="p-6 min-h-[400px] flex flex-col items-center justify-center bg-surface-container-lowest/50 text-center">
                <span className="material-symbols-outlined text-4xl text-outline-variant/40 mb-3 block">forum</span>
                <p className="text-sm font-semibold text-on-surface-variant mb-1">Threads Comments Ready</p>
                <p className="text-xs text-on-surface-variant/70 max-w-[200px]">The Threads integration script will inject community responses here.</p>
              </div>
            </section>
            
            {/* Related Games Quick Links */}
            <section className="bg-surface-container rounded-xl p-6">
              <h3 className="font-headline font-bold mb-4 text-on-surface">Games Featured Here</h3>
              <ul className="space-y-3">
                {article.games.slice(0, 5).map(game => (
                  <li key={`sidebar-${game.id}`}>
                    <a href={game.steamUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded bg-surface-container-highest overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={game.imageUrl} alt=""/>
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">{game.title}</h4>
                        <p className="text-[10px] text-on-surface-variant uppercase truncate">{article.category}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </aside>
      </div>
    </main>
  );
};
