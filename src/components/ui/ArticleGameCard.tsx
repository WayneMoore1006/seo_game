import React from 'react';
import { GameRecommendation } from '../../types';
import { SteamHoverTracker } from '../SteamHoverTracker';

interface ArticleGameCardProps {
  game: GameRecommendation;
  index: number;
}

export const ArticleGameCard: React.FC<ArticleGameCardProps> = ({ game, index }) => {
  return (
    <div id={`game-${game.steamAppId || game.id}`} className="bg-surface-container-low border-l-4 border-primary p-6 rounded-r-xl my-10 shadow-lg shadow-black/20 scroll-mt-24">
      <h3 className="font-headline text-3xl font-bold text-on-surface mb-3 flex items-center gap-3">
        <span className="text-primary">{index + 1}.</span> {game.title}
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {(game.tags && game.tags.length === 5 ? game.tags : ["熱門推薦", "Steam 遊戲", "多人連線", "社群推薦", "精選神作"]).map((tag, i) => (
          <span key={i} className="bg-surface-container border border-primary/40 text-primary-fixed-dim text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            #{tag}
          </span>
        ))}
      </div>

      <p className="mb-6 text-sm text-on-surface-variant/90 leading-relaxed font-medium">
        {game.description}
      </p>

      <div className="relative mb-8 border-l-2 border-primary/50 pl-5 py-3 bg-surface-container-lowest/50 rounded-r-lg italic text-on-surface-variant shadow-inner">
        <span className="material-symbols-outlined absolute -left-4 -top-3 text-primary bg-surface-container-low rounded-full scale-75 border-4 border-surface-container-low">format_quote</span>
        <p className="text-sm">"{game.threadsComment}"</p>
        <div className="text-[10px] uppercase font-bold text-primary mt-2 tracking-widest">— Threads 推文節錄</div>
      </div>

      <div className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 shadow-xl group flex flex-col">
        <SteamHoverTracker
          appId={game.steamAppId || game.id}
          imageUrl={game.imageUrl}
          title={game.title}
        />

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
  );
};
