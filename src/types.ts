export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  players: string;
  rating?: number;
  tags: string[];
  category: string;
  whyFun?: string;
  length?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  gameTitle: string;
  content: string;
  rating: number;
  helpfulCount: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}
