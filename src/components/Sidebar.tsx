import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 flex-shrink-0 hidden xl:block">
      <div className="sticky top-24 space-y-10">
        <section>
          <h3 className="font-headline font-extrabold text-lg mb-6 tracking-tight text-on-surface">Discovery Filters</h3>
          <div className="space-y-8">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Player Count</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full border border-primary text-primary text-xs font-semibold">Solo</button>
                <button className="px-4 py-2 rounded-full border border-outline/20 text-on-surface-variant text-xs font-semibold hover:border-primary/50 transition-colors">2 Players</button>
                <button className="px-4 py-2 rounded-full border border-outline/20 text-on-surface-variant text-xs font-semibold hover:border-primary/50 transition-colors">3-4 Co-op</button>
                <button className="px-4 py-2 rounded-full border border-outline/20 text-on-surface-variant text-xs font-semibold hover:border-primary/50 transition-colors">Large Party</button>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Game Length</label>
              <div className="space-y-3">
                {['Quick Sessions (< 30m)', 'Standard Night (1-2h)', 'Deep Dive (4h+)'].map((label, i) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border ${i === 1 ? 'border-primary bg-primary/10' : 'border-outline/30'} flex items-center justify-center transition-colors`}>
                      {i === 1 && <div className="w-3 h-3 bg-primary rounded-sm" />}
                    </div>
                    <span className={`text-sm ${i === 1 ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'}`}>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-outline/10">
              <button className="w-full primary-gradient text-on-primary font-bold py-3 rounded-xl scale-100 active:scale-95 transition-all shadow-lg shadow-primary/10">
                Apply Preferences
              </button>
            </div>
          </div>
        </section>
        <div className="p-6 rounded-xl bg-surface/50 border border-outline/5">
          <p className="text-xs text-on-surface-variant italic leading-relaxed">
            "We curate for the mood, not just the genre. Find your next shared memory here."
          </p>
        </div>
      </div>
    </aside>
  );
};
