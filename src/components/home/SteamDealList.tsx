import React from 'react';
import { SteamRankingGame } from '../../types';

interface Props {
  title: string;
  games: SteamRankingGame[];
  iconName: string;
  iconColorClass: string;
}

export const SteamDealList: React.FC<Props> = ({ title, games, iconName, iconColorClass }) => {
  if (!games || games.length === 0) return null;

  return (
    <section className="bg-surface-container rounded-xl p-6 border border-outline-variant/10 shadow-2xl shadow-primary/5 mb-8">
      <h3 className="font-headline font-bold mb-4 text-on-surface flex items-center gap-2">
        <span className={`material-symbols-outlined ${iconColorClass} text-xl`} style={{ fontVariationSettings: "'FILL' 1" }}>{iconName}</span>
        {title}
      </h3>
      <ul className="space-y-4">
        {games.slice(0, 10).map((game, index) => (
          <li key={`deal-${game.id}`} className="relative group">
            <a
              href={game.internalUrl}
              className="w-full text-left flex items-start gap-3 focus:outline-none"
            >
              <div className="w-12 h-12 rounded bg-surface-container-highest overflow-hidden flex-shrink-0 relative border border-outline-variant/10">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={game.imageUrl} alt="" />
                <div className="absolute top-0 left-0 bg-black/60 text-white text-[9px] font-bold px-1 rounded-br">#{index + 1}</div>
              </div>
              <div className="flex-grow overflow-hidden">
                <h4 className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate leading-tight">{game.title}</h4>
                <div className="flex items-center gap-2 mt-1.5">
                  {game.isFree ? (
                    <span className="text-green-400 font-bold text-[10px] bg-green-400/10 px-1.5 py-0.5 rounded tracking-wide">免費遊玩</span>
                  ) : game.discountPercent > 0 ? (
                    <>
                      <span className="text-green-400 font-bold text-[10px] bg-green-400/20 px-1.5 py-0.5 rounded tracking-wide">-{game.discountPercent}%</span>
                      <span className="text-on-surface-variant line-through text-[10px]">NT${game.basePrice}</span>
                      <span className="text-green-400 font-bold text-xs">NT${game.currentPrice}</span>
                    </>
                  ) : (
                    <span className="text-on-surface-variant font-medium text-[10px]">NT${game.currentPrice || '--'}</span>
                  )}
                </div>
                <p className="text-[9px] text-on-surface-variant/70 uppercase truncate mt-0.5 tracking-widest">{game.categoryName}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
