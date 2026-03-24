import React from 'react';
import { Link } from 'react-router-dom';

export const BentoGridSection: React.FC = () => {
  return (
    <section className="py-12 px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-8">Best for 4+ Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Large Highlight */}
        <Link to="/game/1" className="md:col-span-2 md:row-span-2 bg-surface-container rounded-xl overflow-hidden group cursor-pointer relative block">
          <img alt="Bento Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevUQG4s1Feajci-B6DHKyge06k0Nb2Z7d16oHrpu8AVaTvkYmZSZs3uBpcH8CG_LoXYesReVU2HpxrygP3N3gPOOFPMn5TtX2Tl_cFMQWuYVb5kiIGQ9u4666ZeGX2grSK_cwCZ7Cyj9laKEzQuU3sEby0eP6E01tM94VHaS0koesVcsOdeOtQBJNqrmmIFMa37o6iu4D5QFFEtuCts2yxTgpuO3_0eWaWjrflYRfmy4AwNcGUQGJMYmZoDEZdq_p1KMldo3g_I-J"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex flex-col justify-end p-8">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Editor's Choice</span>
            <h3 className="text-4xl font-black font-headline tracking-tighter text-on-surface leading-tight">GALAXY RAIDER: FRONTIERS</h3>
            <p className="text-on-surface-variant mt-2 max-w-sm line-clamp-2">The ultimate cooperative sandbox space odyssey. Build, defend, and explore the stars with your entire friend group.</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="flex items-center gap-1 text-xs text-on-surface bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-sm">groups</span> 2-16 Players
              </span>
              <span className="flex items-center gap-1 text-xs text-on-surface bg-surface-container-high px-3 py-1.5 rounded-full border border-outline-variant/20">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>recommend</span> 98% Positive
              </span>
            </div>
          </div>
        </Link>
        
        {/* Small Grid Items */}
        <Link to="/game/1" className="md:col-span-2 bg-surface-container rounded-xl p-6 flex items-center gap-6 group cursor-pointer hover:bg-surface-container-high transition-colors block">
          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <img alt="Grid Item 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhTNEudr57IMAj0kucZn2qiqK618babYiK_qUGJjHa5vgDDCC6a01jyBIdZikEHAWpzZkuRARAt7Euwjv5WjttNB15q1ohhWHprMqiv6MIh4y7V4ePEshVdgAzrrWgpMapNTlnHWHN2SUCkoSkVdZtb1o1_wDQ3AJt7KiBpvVecu_6El1FtqakmZprtjYW1z6Ri9whaLufUeEwman7I5JDLSGUWc9fFEX4XQHKlsiySWvIl2ozLi5ZXqyCa4syMmK9trbnSUSKk-uH"/>
          </div>
          <div>
            <span className="text-primary-container font-bold text-[10px] uppercase">Highly Recommended</span>
            <h4 className="font-headline font-bold text-xl text-on-surface">Dungeon Keepers III</h4>
            <p className="text-on-surface-variant text-sm mt-1 line-clamp-1">Classic co-op strategy redefined for modern hardware.</p>
          </div>
        </Link>
        
        <Link to="/game/1" className="bg-surface-container rounded-xl p-6 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors block">
          <div>
            <h4 className="font-headline font-bold text-lg text-on-surface">Ocean Breach</h4>
            <p className="text-on-surface-variant text-xs mt-1">Deep sea survival horror for brave squads.</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-primary text-xs font-bold">New Content</span>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
          </div>
        </Link>
        
        <Link to="/game/1" className="bg-surface-container rounded-xl p-6 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors block">
          <div>
            <h4 className="font-headline font-bold text-lg text-on-surface">Speed Runners 2</h4>
            <p className="text-on-surface-variant text-xs mt-1">Pure chaotic competitive fun with friends.</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-primary text-xs font-bold">Local Co-op</span>
            <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
