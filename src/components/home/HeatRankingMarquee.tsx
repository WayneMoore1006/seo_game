import React from 'react';
import { SteamRankingGame } from '../../types';

interface Props {
  games: SteamRankingGame[];
  dataSourceLabel: string;
}

export const HeatRankingMarquee: React.FC<Props> = ({ games, dataSourceLabel }) => {
  if (!games || games.length === 0) return null;

  return (
    <div className="w-full bg-[#0d141e] border-y border-outline-variant/10 py-3 group shadow-inner">
      <div 
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0, black 56px, black calc(100% - 56px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 56px, black calc(100% - 56px), transparent 100%)'
        }}
      >
        <div className="flex items-center gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {[0, 1].map((blockIdx) => (
            <React.Fragment key={`block-${blockIdx}`}>
              <div className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                Steam 熱度排名跑馬燈
              </div>
              
              <span className="text-on-surface-variant/50 text-[10px] tracking-widest uppercase shrink-0">|</span>
              <span className="text-on-surface-variant/70 text-[11px] font-medium shrink-0">{dataSourceLabel}</span>
              <span className="text-on-surface-variant/50 text-[10px] tracking-widest uppercase mr-4 shrink-0">|</span>

              {games.map((game, index) => (
                <a
                  key={`${game.id}-${blockIdx}`}
                  href={game.internalUrl}
                  className="flex items-center gap-3 bg-surface-container-high/50 hover:bg-surface-container-highest border border-outline-variant/10 px-4 py-1.5 rounded-full transition-colors shrink-0"
                >
                  <span className="text-primary font-bold italic">#{index + 1}</span>
                  <span className="font-bold text-on-surface text-sm">{game.title}</span>
                  <div className="flex items-center gap-1.5 ml-2">
                    {game.isFree ? (
                      <span className="text-green-400 font-bold text-xs bg-green-400/10 px-2 py-0.5 rounded">免費</span>
                    ) : game.discountPercent > 0 ? (
                      <>
                        <span className="text-green-400 font-bold text-[10px] bg-green-400/20 px-1 rounded">-{game.discountPercent}%</span>
                        <span className="text-on-surface font-bold text-xs">NT${game.currentPrice}</span>
                      </>
                    ) : (
                      <span className="text-on-surface-variant font-medium text-xs">NT${game.currentPrice || '--'}</span>
                    )}
                  </div>
                </a>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};
