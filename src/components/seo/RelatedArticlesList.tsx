import React, { useState } from 'react';
import { Article } from '../../types';

interface Props {
  currentArticle: Article;
  articles: Article[];
}

const INITIAL_DISPLAY = 5;

export const RelatedArticlesList: React.FC<Props> = ({ currentArticle, articles }) => {
  const [expanded, setExpanded] = useState(false);

  // 優先使用 relatedArticleIds，否則顯示所有其他文章
  let related: Article[];
  if (currentArticle.relatedArticleIds && currentArticle.relatedArticleIds.length > 0) {
    related = currentArticle.relatedArticleIds
      .map(id => articles.find(a => a.id === id))
      .filter((a): a is Article => Boolean(a));
  } else {
    related = articles.filter(a => a.id !== currentArticle.id);
  }

  if (related.length === 0) return null;

  const displayList = expanded ? related : related.slice(0, INITIAL_DISPLAY);
  const hasMore = related.length > INITIAL_DISPLAY;

  return (
    <section aria-labelledby="related-sidebar-heading">
      <h3 id="related-sidebar-heading" className="font-headline font-bold mb-4 text-on-surface flex items-center gap-2">
        <span>👾</span>
        <span>你可能也會喜歡</span>
      </h3>

      <ul className="space-y-3">
        {displayList.map(article => (
          <li key={article.id}>
            <a
              href={`/steam-best-games/${article.id}/`}
              className="group flex items-start gap-3 rounded-xl border border-outline-variant/10 bg-surface p-3 hover:border-primary/30 hover:bg-surface-container transition-all"
            >
              {/* 縮圖 */}
              <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-highest">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* 文字 */}
              <div className="min-w-0">
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-0.5 truncate">
                  {article.category}
                </p>
                <h4 className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                  {article.title}
                </h4>
                <p className="text-[10px] text-on-surface-variant line-clamp-2 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* 顯示更多 / 收合 */}
      {hasMore && (
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="mt-3 w-full text-xs text-primary hover:text-primary/80 font-bold py-2 rounded-lg border border-outline-variant/20 hover:border-primary/30 transition-all bg-surface-container"
        >
          {expanded ? '▴ 收合' : `▾ 顯示更多（共 ${related.length} 篇）`}
        </button>
      )}
    </section>
  );
};
