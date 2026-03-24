import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const DiscoverySidebar: React.FC = () => {
  const [activePlayerCount, setActivePlayerCount] = useState<string>('Solo');

  const handleApply = () => {
    toast.success(`Filters applied: ${activePlayerCount}`);
  };

  const counts = ['Solo', '2 Players', '3-4 Co-op', 'Large Party'];

  return (
    <aside className="w-72 flex-shrink-0 hidden xl:block">
      <div className="sticky top-24 space-y-10">
        <section>
          <h3 className="font-headline font-extrabold text-lg mb-6 tracking-tight text-on-surface">Discovery Filters</h3>
          <div className="space-y-8">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">Player Count</label>
              <div className="flex flex-wrap gap-2">
                {counts.map(count => (
                  <button
                    key={count}
                    onClick={() => setActivePlayerCount(count)}
                    className={`px-4 py-2 rounded-full border text-xs font-semibold transition-colors ${
                      activePlayerCount === count
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-outline-variant/20 text-on-surface-variant hover:border-primary/50'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
              <button onClick={handleApply} className="w-full primary-gradient text-on-primary font-bold py-3 rounded-xl scale-100 active:scale-95 transition-all shadow-lg shadow-primary/10">Apply Preferences</button>
            </div>
          </div>
        </section>
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/5">
          <p className="text-xs text-on-surface-variant italic leading-relaxed">"We curate for the mood, not just the genre. Find your next shared memory here."</p>
        </div>
      </div>
    </aside>
  );
};
