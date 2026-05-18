export interface GameRecommendation {
  id: number;
  title: string;
  description: string;
  threadsComment: string;
  imageUrl: string;
  steamUrl: string;
  steamAppId?: number;
  playerCount?: string;
  tags?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  name: string;
  playerCount: string;
  genre: string;
  difficulty: string;
  audience: string;
  isCoopFocused: boolean;
  whyRecommend: string;
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
  // SEO 補強欄位
  seoTitle?: string;
  seoDescription?: string;
  targetKeywords?: string[];
  heroTags?: string[];
  audience?: string[];
  selectionGuide?: string[];
  faqs?: FAQ[];
  comparisonTable?: ComparisonRow[];
  relatedArticleIds?: string[];
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

export interface SteamRankingGame extends GameRecommendation {
  heatScore: number;
  currentPrice: number;
  basePrice: number;
  discountPercent: number;
  isFree: boolean;
  categoryName: string;
  articleId?: string;
  internalUrl?: string;
  gameId?: string | number;
}
