import React, { useState } from 'react';
import { Article, FAQ } from '../../types';

interface Props {
  article: Article;
}

// 根據 article.id / category / games 自動產生 FAQ
function buildFAQs(article: Article): FAQ[] {
  const games = article.games ?? [];
  const gameNames = games.map(g => g.title);
  const first3 = gameNames.slice(0, 3).join('、');
  const first2 = gameNames.slice(0, 2).join('、');

  // 如果資料層已有 faqs，直接使用
  if (article.faqs && article.faqs.length >= 4) {
    return article.faqs;
  }

  const generated: FAQ[] = [];

  if (article.id === 'duo-best-picks') {
    generated.push(
      { question: 'Steam 有哪些雙人遊戲推薦？', answer: `Steam 上熱門的雙人遊戲包含：${first3}等，每款都有獨特的合作玩法，適合不同類型的玩家。` },
      { question: '有哪些適合情侶玩的 Steam 雙人遊戲？', answer: `適合情侶同樂的推薦：${first2}，這類遊戲通常需要溝通、分工與默契。` },
      { question: '雙人遊戲可以遠距線上合作嗎？', answer: '是的，本篇推薦的雙人遊戲均支援線上多人連線，不需在同一地方，有網路就能一起玩。' },
      { question: '雙人合作遊戲適合新手嗎？', answer: `視遊戲而定，若想輕鬆入門可以先選 ${gameNames[0] ?? '輕鬆款'}；若想挑戰默契可選難度較高的款式。` },
    );
    return generated;
  }

  if (article.id === 'casual-party') {
    generated.push(
      { question: '有哪些適合朋友聚會的 Steam 派對遊戲推薦？', answer: `適合聚會的派對遊戲推薦：${first3}等，笑聲保證不斷。` },
      { question: '哪些 Steam 遊戲適合 4 人以上一起玩？', answer: `本篇大多遊戲支援 4 人以上，包含 ${first2} 等，人數越多越熱鬧。` },
      { question: '派對遊戲需要很強的遊戲技術嗎？', answer: '不需要！本篇推薦的派對遊戲都以輕鬆好玩為主，任何人都能快速上手。' },
      { question: '多人派對遊戲可以線上玩嗎？', answer: '可以，本篇大多數遊戲均支援線上連線，即使不在同一個地方也能一起玩。' },
    );
    return generated;
  }

  if (article.id === 'action-puzzle') {
    generated.push(
      { question: '有哪些類似 Portal 2 的 Steam 合作解謎遊戲？', answer: `喜歡 Portal 2 的玩家還可以試試：${first3}。` },
      { question: 'Steam 有哪些雙人解謎遊戲推薦？', answer: `Steam 雙人解謎遊戲推薦：${first3}，各有不同的解謎機制與難度。` },
      { question: '動作解謎類遊戲適合新手嗎？', answer: `視遊戲而定，${gameNames[0] ?? '本篇部分遊戲'}相對友善，${gameNames[1] ?? '其他款式'}則建議有基本操作基礎。` },
      { question: '這些解謎遊戲需要兩人同時在線嗎？', answer: '是的，本篇推薦的多人解謎遊戲均需兩人同時連線，建議開麥克風溝通效果更佳。' },
    );
    return generated;
  }

  if (article.id === 'survival-sim') {
    generated.push(
      { question: '有哪些 Steam 多人合作生存遊戲推薦？', answer: `Steam 多人合作生存遊戲推薦：${first3}，各具特色，適合喜歡長時間合作的玩家。` },
      { question: '生存建造遊戲適合新手嗎？', answer: `${gameNames.find(n => n.includes('Stardew') || n.includes('星露谷') || n.includes('Core')) ?? '本篇部分遊戲'}上手門檻較低，非常適合新手入門。` },
      { question: '哪些遊戲適合長時間和朋友一起玩？', answer: `${first2} 等都是耐玩度極高的遊戲，與朋友一起玩很容易不知不覺就過了好幾個小時。` },
      { question: '有哪些類似 Raft 或 Terraria 的多人遊戲？', answer: `本篇的 ${first3} 都屬於類似風格，建議根據你們偏好的玩法選擇。` },
    );
    return generated;
  }

  if (article.id === 'horror-strategy') {
    generated.push(
      { question: '有哪些 Steam 恐怖遊戲推薦？', answer: `Steam 多人恐怖遊戲推薦：${first3}，適合喜歡緊張刺激體驗的玩家。` },
      { question: '哪些恐怖遊戲適合朋友一起玩？', answer: `${first2} 等支援多人合作，和朋友一起大叫的體驗更有趣！` },
      { question: '多人恐怖遊戲會很難嗎？', answer: '難度視遊戲而定，有些恐怖遊戲偏休閒，有些需要策略與配合，本篇推薦涵蓋多種難度選擇。' },
      { question: '恐怖策略遊戲適合新手嗎？', answer: `視具體遊戲而定，${gameNames[0] ?? '部分款式'} 較易上手；若是喜歡硬派挑戰，本篇也有高難度選擇。` },
    );
    return generated;
  }

  if (article.id === 'steam-wallet-guide') {
    generated.push(
      { question: 'Steam 可以用超商付款嗎？', answer: '可以！Steam 台灣地區支援超商條碼付款，選擇付款方式後取得條碼至超商繳費，通常 15 分鐘內到帳。' },
      { question: 'Steam 錢包儲值後多久到帳？', answer: '信用卡幾乎即時；超商條碼約 5–30 分鐘；Steam 錢包卡兌換序號後立即到帳。' },
      { question: 'Steam 遊戲可以退款嗎？', answer: '可以，條件是購買後 14 天內且遊玩時間未滿 2 小時，退款金額通常退回 Steam 錢包。' },
      { question: 'Steam 錢包餘額可以退回現金嗎？', answer: '不行。Steam 錢包一旦儲值即不可提領為現金，只能用於 Steam 平台消費。' },
    );
    return generated;
  }

  // 通用 FAQ（其他分類）
  generated.push(
    { question: `${article.category} 有哪些遊戲推薦？`, answer: `本篇精選了 ${first3} 等遊戲，適合各種類型的玩家。` },
    { question: '這些遊戲支援線上合作嗎？', answer: '是的，本篇推薦的遊戲大多支援線上多人連線，方便朋友遠距一起玩。' },
    { question: '適合沒有遊戲經驗的新手嗎？', answer: `本篇推薦中有適合不同程度的玩家，建議從 ${gameNames[0] ?? '本篇第一款'} 開始體驗。` },
    { question: '這些遊戲在哪裡可以買到？', answer: '以上所有遊戲均可在 Steam 平台購買，部分遊戲也會不定期推出折扣活動。' },
  );
  return generated;
}

export const ArticleFAQ: React.FC<Props> = ({ article }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = buildFAQs(article);

  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <h2 id="faq-heading" className="font-headline text-2xl font-bold text-on-surface mb-6">
        ❓ 常見問題 FAQ
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-surface-container border border-outline-variant/20 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-surface-container-highest/50 transition-colors focus:outline-none"
              aria-expanded={openIndex === i}
            >
              <h3 className="text-primary font-bold text-sm">Q：{faq.question}</h3>
              <span className={`text-on-surface-variant flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4">
                <p className="text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
