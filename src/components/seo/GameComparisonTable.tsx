import React from 'react';
import { Article, ComparisonRow } from '../../types';

interface Props {
  article: Article;
}

// 根據 category / description / threadsComment 推論遊戲類型
function inferGenre(categoryId: string, description: string, threadsComment: string): string {
  const text = (description + ' ' + threadsComment).toLowerCase();
  if (categoryId === 'duo-best-picks') {
    if (text.includes('解謎') || text.includes('謎題')) return '雙人解謎';
    if (text.includes('平台') || text.includes('跳躍')) return '平台合作';
    if (text.includes('搞笑') || text.includes('沙盒')) return '搞笑沙盒';
    return '雙人合作';
  }
  if (categoryId === 'casual-party') {
    if (text.includes('解謎')) return '合作解謎';
    if (text.includes('廚房') || text.includes('料理')) return '合作廚房';
    if (text.includes('物理')) return '物理派對';
    if (text.includes('麻將') || text.includes('牌')) return '桌遊';
    return '派對休閒';
  }
  if (categoryId === 'action-puzzle') {
    if (text.includes('射擊') || text.includes('fps')) return 'FPS / Roguelite';
    if (text.includes('解謎') || text.includes('謎題')) return '動作解謎';
    if (text.includes('跳躍') || text.includes('平台')) return '平台跳躍';
    return '動作合作';
  }
  if (categoryId === 'survival-sim') {
    if (text.includes('農場') || text.includes('種田')) return '農場模擬';
    if (text.includes('恐怖') || text.includes('生存')) return '恐怖生存建造';
    if (text.includes('挖礦') || text.includes('沙盒')) return '沙盒建造';
    if (text.includes('海洋') || text.includes('漂流')) return '海洋生存';
    return '生存建造';
  }
  if (categoryId === 'horror-strategy') {
    if (text.includes('射擊') || text.includes('fps') || text.includes('cs')) return '競技射擊';
    if (text.includes('恐怖') || text.includes('怪物')) return '恐怖合作';
    if (text.includes('策略') || text.includes('rpg')) return '策略 RPG';
    return '恐怖策略';
  }
  return '合作遊戲';
}

// 根據 description / threadsComment 推論難度
function inferDifficulty(description: string, threadsComment: string): string {
  const text = (description + ' ' + threadsComment).toLowerCase();
  const hard = ['考驗', '挑戰', '困難', '硬派', '崩潰', '極限', '很難', '超難', '難度高', '胃痛', '挫折', '崩', '極高'];
  const easy = ['輕鬆', '好上手', '休閒', '放鬆', '可愛', '療癒', '新手'];
  const hardCount = hard.filter(w => text.includes(w)).length;
  const easyCount = easy.filter(w => text.includes(w)).length;
  if (hardCount >= 2) return '高';
  if (hardCount >= 1 && easyCount === 0) return '中高';
  if (easyCount >= 1 && hardCount === 0) return '低';
  return '中';
}

// 根據 category 推論適合對象
function inferAudience(categoryId: string, description: string, threadsComment: string): string {
  const text = (description + ' ' + threadsComment).toLowerCase();
  if (categoryId === 'duo-best-picks') {
    if (text.includes('情侶') || text.includes('兩人')) return '情侶、遠距朋友';
    return '朋友、情侶';
  }
  if (categoryId === 'casual-party') {
    if (text.includes('麻將') || text.includes('牌')) return '朋友聚會';
    if (text.includes('情侶') || text.includes('另一半')) return '情侶、朋友';
    return '朋友聚會、多人同樂';
  }
  if (categoryId === 'action-puzzle') {
    if (text.includes('fps') || text.includes('射擊')) return 'FPS 玩家';
    if (text.includes('燒腦') || text.includes('解謎')) return '喜歡燒腦的玩家';
    return '喜歡挑戰默契的玩家';
  }
  if (categoryId === 'survival-sim') {
    if (text.includes('休閒') || text.includes('種田') || text.includes('農場')) return '休閒玩家、農場愛好者';
    return '喜歡長時間合作的玩家';
  }
  if (categoryId === 'horror-strategy') {
    if (text.includes('射擊') || text.includes('fps')) return 'FPS 玩家';
    if (text.includes('恐怖') || text.includes('鬼')) return '喜歡恐怖刺激的玩家';
    return '硬派挑戰玩家';
  }
  return '多人合作玩家';
}

// 判斷是否偏向合作
function inferIsCoop(playerCount: string | undefined, description: string, threadsComment: string): boolean {
  const pc = (playerCount ?? '').toLowerCase();
  const text = (description + ' ' + threadsComment).toLowerCase();
  if (pc.includes('雙人') || pc.includes('多人') || pc.includes('4人')) return true;
  if (text.includes('合作') || text.includes('一起') || text.includes('隊友')) return true;
  return false;
}

// 從 threadsComment / description 摘要推薦理由
function inferWhyRecommend(threadsComment: string, description: string): string {
  // 取 threadsComment 第一句（以 / 或 。或 ！分割）
  const comment = threadsComment
    .split(/[/！。\n]/)[0]
    .replace(/^\s+/, '')
    .trim();
  if (comment.length >= 8 && comment.length <= 40) return comment;
  // fallback: 取 description 前 30 字
  return description.replace(/<[^>]+>/g, '').trim().slice(0, 35) + '…';
}

// 從 games 動態產生比較表資料
function buildRows(article: Article): ComparisonRow[] {
  // 如果資料層已有 comparisonTable，直接使用
  if (article.comparisonTable && article.comparisonTable.length > 0) {
    return article.comparisonTable;
  }
  // 根據 games 自動推論
  return (article.games ?? []).map(game => ({
    name: game.title,
    playerCount: game.playerCount ?? '依遊戲模式而定',
    genre: inferGenre(article.id, game.description, game.threadsComment),
    difficulty: inferDifficulty(game.description, game.threadsComment),
    audience: inferAudience(article.id, game.description, game.threadsComment),
    isCoopFocused: inferIsCoop(game.playerCount, game.description, game.threadsComment),
    whyRecommend: inferWhyRecommend(game.threadsComment, game.description),
  }));
}

export const GameComparisonTable: React.FC<Props> = ({ article }) => {
  const rows = buildRows(article);
  if (rows.length === 0) return null;

  return (
    <section aria-labelledby="comparison-heading" className="mt-12">
      <h2 id="comparison-heading" className="font-headline text-2xl font-bold text-on-surface mb-4">
        📊 遊戲特色比較表
      </h2>
      <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
        <table className="w-full text-sm text-left">
          <thead className="bg-surface-container text-on-surface-variant uppercase text-xs">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap">遊戲名稱</th>
              <th className="px-4 py-3 whitespace-nowrap">遊玩人數</th>
              <th className="px-4 py-3 whitespace-nowrap">類型</th>
              <th className="px-4 py-3 whitespace-nowrap">難度</th>
              <th className="px-4 py-3 whitespace-nowrap">適合對象</th>
              <th className="px-4 py-3 whitespace-nowrap text-center">偏合作</th>
              <th className="px-4 py-3 min-w-[140px]">推薦原因</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-container/60'}>
                <td className="px-4 py-3 font-medium text-on-surface whitespace-nowrap">{row.name}</td>
                <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{row.playerCount}</td>
                <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{row.genre}</td>
                <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{row.difficulty}</td>
                <td className="px-4 py-3 text-on-surface-variant">{row.audience}</td>
                <td className="px-4 py-3 text-center">{row.isCoopFocused ? '✅' : '—'}</td>
                <td className="px-4 py-3 text-on-surface-variant">{row.whyRecommend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
