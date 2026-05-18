import React from 'react';

interface Props {
  tags?: string[];
}

export const ArticleHeroTags: React.FC<Props> = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="w-full mb-12 -mt-6">
      <section className="text-left">
        <h3 className="text-on-surface-variant text-sm font-bold tracking-wider uppercase mb-3">熱門搜尋標籤</h3>
        <div className="flex flex-wrap justify-start gap-2.5">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="bg-surface-container-high border border-outline-variant/10 text-on-surface-variant text-sm px-3.5 py-1.5 rounded-full shadow-sm hover:text-primary transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
