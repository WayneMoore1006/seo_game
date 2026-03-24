import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  return (
    <section className="relative h-[870px] w-full overflow-hidden flex items-end px-8 pb-20 md:px-16 lg:px-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10"></div>
        <img alt="Hero Trailer Background" className="w-full h-full object-cover scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1HCWZfzhc9FG-UkOjJGwzCOmGX0M5VF44C-RFT3_kfq9U9v_WcMto39vidh0Sdr0F3UsbUwmFeRFhlMOtcoAt102jBDK7HLG2DqgsDNtJDevdZOj_aa35sR9xzlulM1RiJ10wZebaq_5YhR-V6XVg8087MF054T9lFBFemWOvBAUbtQO91w-5U9SnsZ3I17Gp3d-coNFhdQiUFjp3bstICATRqC3HdUW0dmtvnBUb5ont69MdqmVXbDeQwz_D1LmAfuxBy5myhJTe"/>
      </div>
      <div className="relative z-20 max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          <span className="bg-primary/20 text-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase border border-primary/30">Editors Pick</span>
          <span className="text-on-surface-variant text-xs flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">groups</span> 4-Player Co-op
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-on-surface leading-[0.9]">NEON SQUAD: OVERDRIVE</h1>
        <p className="text-lg text-on-surface-variant font-light leading-relaxed max-w-xl">
          Experience the most intense tactical extraction shooter of the decade. Coordinate with your squad in a neon-drenched dystopian city where every decision matters.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button onClick={() => setIsTrailerOpen(true)} className="primary-gradient px-8 py-4 rounded-md text-on-primary font-bold font-headline tracking-tight flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            Watch Trailer
          </button>
          <Link to="/game/1" className="bg-surface-container-highest px-8 py-4 rounded-md text-on-surface font-bold font-headline tracking-tight hover:bg-surface-bright transition-colors border border-outline-variant/10">
            View Details
          </Link>
        </div>
      </div>

      {isTrailerOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-surface-container-low rounded-2xl overflow-hidden max-w-5xl w-full border border-outline-variant/20 shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-outline-variant/10">
              <h3 className="font-headline font-bold text-lg">NEON SQUAD: OVERDRIVE - Official Trailer</h3>
              <button onClick={() => setIsTrailerOpen(false)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-error/20 hover:text-error transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center relative group">
              {/* Fake Video Player Template */}
              <img alt="Trailer placeholder" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1HCWZfzhc9FG-UkOjJGwzCOmGX0M5VF44C-RFT3_kfq9U9v_WcMto39vidh0Sdr0F3UsbUwmFeRFhlMOtcoAt102jBDK7HLG2DqgsDNtJDevdZOj_aa35sR9xzlulM1RiJ10wZebaq_5YhR-V6XVg8087MF054T9lFBFemWOvBAUbtQO91w-5U9SnsZ3I17Gp3d-coNFhdQiUFjp3bstICATRqC3HdUW0dmtvnBUb5ont69MdqmVXbDeQwz_D1LmAfuxBy5myhJTe"/>
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
