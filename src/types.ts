export interface GameRecommendation {
  id: number;
  title: string;
  description: string;
  threadsComment: string;
  imageUrl: string;
  steamUrl: string;
  steamAppId?: number;
  playerCount?: string;
}

export interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  heroImage: string;
  games?: GameRecommendation[];
  body?: string;
}

export interface PricePoint {
  date: string;
  price: number;
  discountPercent: number;
  isHistoricalLow: boolean;
  eventName?: string;
}

export interface SteamSaleData {
  history: PricePoint[];
  historicalLowPrice: number;
  isCurrentHistoricalLow: boolean;
  avgDiscount: number;
  recommendation: string;
  basePrice: number;
  currentPrice: number;
}

export interface SteamHoverTrackerProps {
  appId?: number;
  imageUrl: string;
  title: string;
}

export interface SteamLiveGame {
  appId: number;
  title: string;
  isLive: boolean;
  viewers: number;
  streamerName: string;
  previewImageUrl: string;
  recommendations: number;
  gameUrl: string;
}

export type SteamLiveStatus = 'loading' | 'active' | 'empty' | 'hidden';
