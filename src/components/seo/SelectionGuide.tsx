import React from 'react';
import { Article, GameRecommendation } from '../../types';

interface Props {
  article: Article;
}

interface GuideTip {
  situation: string;
  games: GameRecommendation[];
  reason: string;
}

const hasKeyword = (game: GameRecommendation, keywords: string[]): boolean => {
  const text = (game.description + ' ' + game.threadsComment).toLowerCase();
  return keywords.some(k => text.includes(k));
};

function buildGuides(article: Article): GuideTip[] {
  const games = article.games ?? [];
  if (games.length === 0) return [];
  const tips: GuideTip[] = [];

  // 1. 輕鬆入門
  const easyGames = games.filter(g =>
    hasKeyword(g, ['輕鬆', '好上手', '可愛', '休閒', '放鬆', '療癒'])
  );
  if (easyGames.length > 0) {
    tips.push({
      situation: '你想輕鬆入門、不需要太多遊戲技術',
      games: easyGames.slice(0, 2),
      reason: '這類遊戲門檻低、玩法直觀，新手也能快速享受樂趣。',
    });
  }

  // 2. 考驗默契
  const coopGames = games.filter(g =>
    hasKeyword(g, ['合作', '默契', '溝通', '分工', '一起', '雙人', '隊友'])
  );
  if (coopGames.length > 0) {
    tips.push({
      situation: '你想考驗彼此默契、深度合作',
      games: coopGames.slice(0, 2),
      reason: '這類遊戲需要溝通協作，玩起來成就感十足，也最能增進感情。',
    });
  }

  // 3. 多人聚會
  const partyGames = games.filter(g => {
    const pc = (g.playerCount ?? '').toLowerCase();
    return pc.includes('4人') || pc.includes('多人') || article.id === 'casual-party';
  });
  const partyOnly = partyGames.filter(g => !easyGames.includes(g));
  if (partyOnly.length > 0) {
    tips.push({
      situation: '你想找多人聚會、一起歡樂的遊戲',
      games: partyOnly.slice(0, 2),
      reason: '支援多人同樂，人越多越熱鬧，非常適合聚會時間。',
    });
  }

  // 4. 劇情沉浸
  const storyGames = games.filter(g =>
    hasKeyword(g, ['劇情', '冒險', '故事', '沉浸'])
  );
  if (storyGames.length > 0) {
    tips.push({
      situation: '你喜歡沉浸式劇情、邊玩邊看故事',
      games: storyGames.slice(0, 2),
      reason: '這類遊戲劇情豐富，玩起來像在體驗一部互動電影。',
    });
  }

  // 5. 高難度挑戰
  const hardGames = games.filter(g =>
    hasKeyword(g, ['困難', '挑戰', '考驗', '硬派', '挫折', '崩潰', '超難', '極難'])
  );
  if (hardGames.length > 0) {
    tips.push({
      situation: '你想挑戰高難度、追求過關後的成就感',
      games: hardGames.slice(0, 2),
      reason: '難度不低但成就感爆棚，適合喜歡接受挑戰的玩家。',
    });
  }

  return tips.slice(0, 5);
}

export const SelectionGuide: React.FC<Props> = ({ article }) => {
  const dynamicGuides = buildGuides(article);
  const hasStaticGuide = article.selectionGuide && article.selectionGuide.length > 0;

  if (dynamicGuides.length === 0 && !hasStaticGuide) return null;

  const scrollToGame = (gameId: number) => {
    document.getElementById(`game-${gameId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section aria-labelledby="guide-heading" className="mt-12">
      <h2 id="guide-heading" className="font-headline text-2xl font-bold text-on-surface mb-6">
        🧭 新手怎麼選？
      </h2>

      {dynamicGuides.length > 0 ? (
        <ul className="space-y-4">
          {dynamicGuides.map((tip, i) => (
            <li
              key={i}
              className="bg-surface-container border border-outline-variant/20 rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <p className="text-on-surface font-semibold mb-2">
                <span className="text-primary mr-2">▸</span>
                如果{tip.situation}，推薦：
                {tip.games.map((g, gi) => (
                  <React.Fragment key={g.id}>
                    {gi > 0 && <span className="text-on-surface-variant mx-1">/</span>}
                    <button
                      onClick={() => scrollToGame(g.id)}
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors ml-1 font-bold"
                    >
                      {g.title}
                    </button>
                  </React.Fragment>
                ))}
              </p>
              <p className="text-on-surface-variant text-sm pl-5">{tip.reason}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-3">
          {(article.selectionGuide ?? []).map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-on-surface-variant">
              <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
