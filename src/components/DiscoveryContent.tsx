import React from 'react';
import { Link } from 'react-router-dom';

export const DiscoveryContent: React.FC = () => {
  return (
    <div className="flex-grow space-y-20">
      {/* Category Section: Co-op Adventures */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Teamwork Essential</span>
            <h2 className="text-4xl font-black font-headline tracking-tighter text-on-surface">Co-op Adventures</h2>
          </div>
          <a className="text-on-surface-variant hover:text-primary text-sm font-semibold flex items-center gap-2 transition-colors" href="#">
            Explore Category <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Game Card 1 */}
          <Link to="/game/1" className="group relative bg-surface-container rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 block">
            <div className="aspect-video w-full relative overflow-hidden">
              <img alt="Cyberpunk co-op game" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguonxkd7nmuEOYeficbK1EmX_z794HWCLFH6thUTbDd9YohCFNk2aMvsTGZKSvCR0byddRXTous8hs4s1W5XXsRqsZBy_zFp23j6mSogA-ztHXYOPsN1YtlWoXfYgkCjJZMr2kZY8gsFIbFM3iQWNKGmeRHZW_jxB5einPFwkU34DZK9Zy1eQq0yqQt-TUBdxhAYyyRyEduzNIGT7YRyBYpBtTRBMiaz3EC6Oed0wAWRIjmWq7AaQ1MnX8r1aqmXuyIbfG0O8pt5F"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 glass-overlay px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">2-4 Players</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
                  <span className="material-symbols-outlined text-on-primary">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-3 text-on-surface">Neon Syndicate</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Infiltrate the high-rise servers of the global megacorps. Your team is your only lifeline in this high-octane heist.</p>
              <div className="bg-surface-container-low p-4 rounded-xl border-l-2 border-primary/30">
                <span className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1 block">Why it's fun with friends</span>
                <p className="text-xs text-on-surface/80 italic">"The asymmetric hacking mechanics mean everyone has a unique role. No more 'following the leader'—you win together or fail alone."</p>
              </div>
            </div>
          </Link>
          {/* Game Card 2 */}
          <Link to="/game/1" className="group relative bg-surface-container rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 block">
            <div className="aspect-video w-full relative overflow-hidden">
              <img alt="Space exploration game" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu3CrOs97xRzDS_LNzpf2tGcWdkIzy6dIS69uEr6TenZ5SEqQfGC0NbBXWCLm7FDcKWxAInzhf64iDIqfSzM_IqL2UhiT46krEET5gfA0ftGU59nDBDtllQwEdOTSjpo3GsRnFE4mcdPyw-Zaey2mXE03i_uWPMp_21Kn_kqVoe17n5WyzVpEIEXTeR3pTrTucmHONlEE9gSF_2TNZIRASJA1Bqc5ks1S1jCRwUmpdsHZt5cQowbuCasafjMWo8gW0LveNZ7ZKLa-1"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 glass-overlay px-3 py-1 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">1-6 Players</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-headline mb-3 text-on-surface">Void Mariners</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Manage a struggling starship through uncharted galaxies. Repair systems, manage fuel, and discover ancient alien relics.</p>
              <div className="bg-surface-container-low p-4 rounded-xl border-l-2 border-primary/30">
                <span className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1 block">Why it's fun with friends</span>
                <p className="text-xs text-on-surface/80 italic">"Chaos management at its finest. Screaming at your friend to fix the oxygen while you pilot through an asteroid belt is peak bonding."</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Section: Party Games (Bento Style) */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-tertiary-dim font-bold tracking-widest text-xs uppercase mb-2 block">Chaos &amp; Laughter</span>
            <h2 className="text-4xl font-black font-headline tracking-tighter text-on-surface">Party Games</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Box 1: Large */}
          <Link to="/game/1" className="md:col-span-2 group relative bg-surface-container rounded-xl overflow-hidden min-h-[400px] block cursor-pointer">
            <div className="absolute inset-0">
              <img alt="Funny party game" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCznq2rYuCnhGo_k4cg0GPJb-StXdM7sRZYMaFtUknn9OrmIayoM-WJSW-k-H4kh2KoOH9lkwr3TreB0_b6NDhSFVMEwp7-hIUXZnbHegp9T23ky8tFCtXlpazZzLUZA8Mngw03yyk05_fBQMyldeTo55kHz7QbF7LkSql-XYsQ6xTHd1aioRsaeCQa96USymqMi4hK5cB2OajDgxitilCLBh3fZQMH0ITXPb-PlTqpbxQmdKi23UCOsof7KmZIp48FVtz5-JVr-Ikk"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase">Local &amp; Online</span>
                <span className="glass-overlay px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">8+ Players</span>
              </div>
              <h3 className="text-4xl font-black font-headline mb-4">Misfit Mayhem</h3>
              <p className="max-w-md text-on-surface-variant text-sm mb-6 leading-relaxed">The ultimate physics-based friendship destroyer. 50+ minigames designed to provoke maximum laughter and minimal strategy.</p>
              <div className="flex items-center gap-4">
                <button className="primary-gradient text-on-primary px-8 py-3 rounded-xl font-bold text-sm scale-100 active:scale-95 transition-all">Quick Start</button>
                <span className="text-xs font-semibold text-on-surface/60 italic">"Perfect for 'one last round' loops."</span>
              </div>
            </div>
          </Link>
          {/* Bento Box 2: Small */}
          <Link to="/game/1" className="group relative bg-surface-container rounded-xl overflow-hidden p-8 flex flex-col justify-between block cursor-pointer hover:bg-surface-container-high transition-colors">
            <div>
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">psychology</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-3">Liar's Deck</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">A social deduction card game where your voice is your only weapon. Deceive, bluff, and betray.</p>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
              <div className="flex items-center justify-between text-[10px] font-bold text-primary tracking-widest uppercase">
                <span>3-8 Players</span>
                <span>15 Min</span>
              </div>
            </div>
          </Link>
          {/* Bento Box 3: Small */}
          <Link to="/game/1" className="group relative bg-surface-container rounded-xl overflow-hidden p-8 flex flex-col justify-between block cursor-pointer hover:bg-surface-container-high transition-colors">
            <div>
              <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">draw</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-3">Doodle Duel</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Collaborative art meets competitive guessing. The worse you draw, the funnier it gets.</p>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
              <div className="flex items-center justify-between text-[10px] font-bold text-primary tracking-widest uppercase">
                <span>2-12 Players</span>
                <span>20 Min</span>
              </div>
            </div>
          </Link>
          {/* Bento Box 4: Horizontal */}
          <div className="md:col-span-3 flex bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/5">
            <div className="w-1/3 aspect-video md:aspect-auto">
              <img alt="VR Social" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA7HWKS-zx4NslZ4bFGoSkpe9q_t1M_m1ESa48MoQc83vbS_fTusGm59iEgwP9l03whddoR32Pq2PMPN2hTYrk6SxJ7a_WlJLwXfOrksTKLSiqYFZeME6ONpR7B8wvqo2MJymoXFB9JmOyqcvnB-IQjAAK-JQDqUpt7YxxFhjRrO2tIVSe3rEyHtWKGW1BEVMlYHMp0vw1vigeN5I7JA5tAKyDq5Jp9z30sO0GmvO95bbJ24Z8kSh3O-8EMbSVLXj8VRy5WSiEDlBc"/>
            </div>
            <div className="flex-grow p-10 flex flex-col justify-center">
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-3">Featured Tech</span>
              <h3 className="text-3xl font-black font-headline mb-4">Social VR: The New Front Door</h3>
              <p className="text-on-surface-variant text-sm max-w-2xl leading-relaxed mb-6">Forget Discord. We've curated three VR spaces where presence is everything. Experience table-top games in a shared digital chalet.</p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-surface-container rounded-lg text-xs font-semibold border border-outline-variant/20">Spatial Audio</div>
                <div className="px-4 py-2 bg-surface-container rounded-lg text-xs font-semibold border border-outline-variant/20">Full Body Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
