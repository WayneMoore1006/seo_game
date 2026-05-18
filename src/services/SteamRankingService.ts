import { Article, SteamRankingGame, GameRecommendation } from '../types';
import { SteamSaleService } from './SteamSaleService';
import { articles } from '../data/articles';

export class SteamRankingService {
  private static readonly CACHE_KEY = 'steam-ranking-cache-v3';
  private static readonly CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

  private static buildInternalUrl(articleId?: string, gameId?: number | string) {
    if (!articleId) return "/steam-best-games/";
    if (!gameId) return `/steam-best-games/${articleId}/`;
    return `/steam-best-games/${articleId}/#game-${gameId}`;
  }

  static async getRankingData(): Promise<{
    topHeatGames: SteamRankingGame[];
    freeGames: SteamRankingGame[];
    discountGames: SteamRankingGame[];
    dataSourceLabel: string;
  }> {
    // 1. Try to read from cache
    try {
      if (typeof window !== 'undefined') {
        const cachedStr = localStorage.getItem(this.CACHE_KEY);
        if (cachedStr) {
          const cached = JSON.parse(cachedStr);
          const now = Date.now();
          if (now - cached.fetchedAt < this.CACHE_TTL_MS) {
            // Verify that the cached data has correct internalUrl with #game-
            const hasValidInternalUrls = cached.data.topHeatGames.every((g: any) => g.internalUrl && g.internalUrl.includes('#game-'));
            if (hasValidInternalUrls) {
              return {
                topHeatGames: cached.data.topHeatGames,
                freeGames: cached.data.freeGames,
                discountGames: cached.data.discountGames,
                dataSourceLabel: '目前使用快取資料'
              };
            }
          }
        }
      }
    } catch (e) {
      console.warn('Failed to read Steam ranking cache:', e);
    }

    // 2. Fetch fresh data if cache is expired or missing
    const allGamesMap = new Map<number, SteamRankingGame>();
    let useFallback = false;

    // Collect all unique games from articles
    const uniqueGames: { game: GameRecommendation, categoryName: string, articleId: string }[] = [];
    for (const article of articles) {
      if (article.games) {
        for (const game of article.games) {
          const gameId = game.steamAppId || game.id;
          if (!allGamesMap.has(gameId)) {
            uniqueGames.push({ game, categoryName: article.category, articleId: article.id });
            allGamesMap.set(gameId, {
              ...game,
              heatScore: 0,
              currentPrice: 0,
              basePrice: 0,
              discountPercent: 0,
              isFree: false,
              categoryName: article.category,
              articleId: article.id,
              gameId: gameId,
              internalUrl: this.buildInternalUrl(article.id, gameId)
            });
          }
        }
      }
    }

    try {
      // Limit concurrent requests to avoid rate limits
      const batchSize = 3;
      for (let i = 0; i < uniqueGames.length; i += batchSize) {
        const batch = uniqueGames.slice(i, i + batchSize);
        const promises = batch.map(async ({ game }) => {
          let appId = game.steamAppId || game.id;
          if (!appId) {
            const resolved = await SteamSaleService.resolveAppId(game.title);
            if (resolved) appId = resolved;
          }
          
          if (!appId) return;

          try {
            // We reuse fetchPriceHistory which handles caching and fetching from Steam API
            const history = await SteamSaleService.fetchPriceHistory(appId);
            if (history && history.length > 0) {
              const lastPoint = history[history.length - 1];
              const basePrice = Math.round(lastPoint.price / (1 - lastPoint.discountPercent / 100));
              const analysis = SteamSaleService.analyzePriceTrend(history, lastPoint.price, basePrice);
              
              const rankingGame = allGamesMap.get(game.steamAppId || game.id);
              if (rankingGame && analysis) {
                rankingGame.currentPrice = analysis.currentPrice;
                rankingGame.basePrice = analysis.basePrice;
                rankingGame.discountPercent = analysis.history[analysis.history.length - 1].discountPercent;
                rankingGame.isFree = analysis.currentPrice === 0;
                
                // Fallback heat score calculation based on reviews/playerCount if available,
                // Since official API doesn't return ranking, we use a deterministic pseudo-score based on id/price + discount
                rankingGame.heatScore = (1000 - rankingGame.currentPrice) + (rankingGame.discountPercent * 50) + (rankingGame.id % 500);
              }
            }
          } catch (e) {
             console.warn(`Failed to fetch ranking details for app ${appId}`);
          }
        });
        
        await Promise.allSettled(promises);
      }
    } catch (e) {
      console.error('Failed to fetch Steam API, using fallback data.', e);
      useFallback = true;
    }

    const allGamesArray = Array.from(allGamesMap.values());

    // Sorting Logic
    const sortedByHeat = [...allGamesArray].sort((a, b) => b.heatScore - a.heatScore);
    const topHeatGames = sortedByHeat.slice(0, 10); // Top 10

    const freeGames = allGamesArray
      .filter(g => g.isFree)
      .sort((a, b) => b.heatScore - a.heatScore);

    const discountGames = allGamesArray
      .filter(g => g.discountPercent > 0 && !g.isFree)
      .sort((a, b) => b.discountPercent - a.discountPercent || b.heatScore - a.heatScore);

    const result = {
      topHeatGames,
      freeGames,
      discountGames,
      dataSourceLabel: useFallback ? '目前使用站內推薦排序' : '依 Steam 公開資料與站內推薦資料排序'
    };

    // 3. Save to cache
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.CACHE_KEY, JSON.stringify({
          fetchedAt: Date.now(),
          data: result
        }));
      }
    } catch (e) {
      console.warn('Failed to write Steam ranking cache:', e);
    }

    return result;
  }
}
